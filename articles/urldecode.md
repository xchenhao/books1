## URL Decode 的实现原理

### Unicode 与 UTF

- Unicode 类似于一本字典，襄括世界上的绝大部分语言中的字符，即解决了字符的编码方式
- 但 Unicode 可能用 2 个字节或 4 个字节对字符进行编码，对于一些本可用较少存储空间的字符（如单字节字符），以及历史字符集的兼容（如 ASCII 先于 Unicode 产生），则需要设计单独的实现方式加以处理，由此产生 Unicode 转换格式（Unicode Transformation Format, UTF），如 UTF-8, GBK, GB2312, BIG5, UTF-16

### Unicode 和 UTF-8 之间的转换关系表

| 字节序列 |      Unicode 十六进制码点范围 | UTF-8 二进制 |          |          |          |
| --------  | ------------ | -------- | -------- | -------- | -------- |
|                                    |        | Byte 4 | Byte 3 | Byte 2 |Byte 1|
| 1              | 0000 0000 - 0000 007F    |              |          |          | 0xxxxxxx |
| 2             | 0000 0080 - 0000 07FF    |              |          | 110xxxxx | 10xxxxxx |
| 3             | 0000 0800 - 0000 FFFF    |              | 1110xxxx | 10xxxxxx | 10xxxxxx |
| 4             | 0001 0000 - 0010 FFFF    | 11110xxx     | 10xxxxxx | 10xxxxxx | 10xxxxxx |

```java
System.out.println((char)0x6c49);  // 汉
```

### Unicode 和 UTF-16 转换算法

#### UTF-16 组成

- 基本平面： U+0000~U+FFFF 
  + U+0000~U+D7FF
  + U+D800~U+DFFF：空段，用于映射辅助平面上的字符
    * U+D800~U+DBFF：高位
    * U+DC00~U+DFFF：低位
  + U+E000~U+FFFF

- 辅助平面：U+ 010000~ U+10FFFF


#### UTF-16 解码
- 高位：`((unicode 值 -  0x10000) >> 10) + 0xD800`

- 低位：`((unicode 值 -  0x10000) % 0x400) + 0xDC00`

| 高位\低位  | 0xDC00 | 0xDC01 | ...  | 0xDFFF |
| ---------- | ------ | ------ | ---- | ------ |
| **0xD800** | 10000  | 10001  | …    | 103FF  |
| **0xD801** | 10400  | 10401  | ...  | 107FF  |
| **...**    | ...    | ...    | ...  | ...    |
| **0xD8FF** | 10FC00 | 10FC01 | ...  | 10FFFF |

```java
System.out.println(new String(new char[]{(char)55356, (char)56324}));  // 🀄
```



### URL Decode 的代码实现

URL 只能由英文字母、数字和一些标点符号组成，而其它字符必须编码后使用

```java
/**
 * URL Decode 的实现原理
 */
public class UrlDecode {

    public static void main(String[] args) {
        String str = "/controller/action?&wd=%F0%9F%8D%80&s=%E9%9D%92%E5%B1%B1%E6%9C%AC%E4%B8%8D%E8%80%81%EF%BC%8C%E4%B8%BA%E9%9B%AA%E7%99%BD%E5%A4%B4%EF%BC%9B%E7%BB%BF%E6%B0%B4%E6%9C%AC%E6%97%A0%E5%BF%A7%EF%BC%8C%E5%9B%A0%E9%A3%8E%E7%9A%B1%E9%9D%A2&page=1&page_size=30";

        String decodedStr = urldecode(str);
        System.out.println(decodedStr);
    }

    public static String urldecode(String s) {
        boolean needToChange = false;
        int numChars = s.length();
        StringBuilder sb = new StringBuilder();
        int i = 0;
        char c;
        String vv = "+%";
        byte vNum1 = (byte)vv.charAt(0);
        byte vNum2 = (byte)vv.charAt(1);
        while (i < numChars) {
            c = s.charAt(i);
            byte cNum = (byte)c;
            if (cNum == vNum1) {
                sb.append(' ');
                i++;
                needToChange = true;
            } else if (cNum == vNum2) {
                String hexString = "";
                int countHex = 0;
                int[] tmpBytes = null;
                while (((i + 2) < numChars) && ((byte)c == vNum2)) {
                    int v = Integer.parseInt(s.substring(i + 1, i + 3), 16);
                    if (tmpBytes == null) {
                        tmpBytes = new int[4];
                    }
                    tmpBytes[countHex] = v;
                    int byteCount = 1;
                    int preBitNum = tmpBytes[0] >> 4; // ????xxxx
                    if (preBitNum >= 15) { // 1111
                        byteCount = 4;
                    } else if (preBitNum >= 14) {  // 1110
                        byteCount = 3;
                    } else if (preBitNum >= 12) {  // 110x
                        byteCount = 2;
                    }
                    hexString += s.substring(i + 1, i + 3);
                    countHex += 1;
                    if (byteCount == countHex) {
                        char result;
                        if (byteCount == 1) {
                            result = (char)v;
                            sb.append(result);
                        } else {
                            if (hexString.length() >= 8) {
                                int fourth = Integer.parseInt(hexString.substring(0, 2), 16);
                                int left = Integer.parseInt(hexString.substring(2, 8), 16);
                                // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
                                int unicodeNum = ((fourth & 7) << 18) | ((left & 0x3f0000) >> 4) | ((left & 0x3f00) >> 2) | (left & 0x3f);
                                int highBit = ((unicodeNum - 0x10000) >> 10) + 0xD800;  // 上 10 位 + 0xD800 => 高位
                                int lowBit = (unicodeNum - 0x10000) % 0x400 + 0xDC00;   // 下 10 位 + 0xDC00 => 低位
                                sb.append((char)highBit);
                                sb.append((char)lowBit);
                            } else {
                                int num = Integer.parseInt(hexString, 16);
                                if ((num & 0xe00000) > 0) {  // 1110 0000 0000 0000 0000 0000
                                    // 1110xxxx 10xxxxxx 10xxxxxx
                                    result = (char)(((num & 0xf0000) >> 4) | ((num & 0x3f00) >> 2) | (num & 0x3f));
                                } else if ((num & 0xc000) > 0) {  // 1100 0000 0000 0000
                                    // 110xxxxx 10xxxxxx
                                    result = (char)(((num & 0x1f00) >> 2) | (num & 0x3f));
                                } else {
                                    // 0xxxxxxx
                                    result = (char)(num & 127);
                                }
                                sb.append(result);
                            }
                        }
                        hexString = "";
                        countHex = 0;
                    }
                    i += 3;
                    if (i < numChars) {
                        c = s.charAt(i);
                    }
                }
                needToChange = true;
            } else {
                sb.append(c);
                i++;
            }
        }

        return needToChange ? sb.toString() : s;
    }

}

```

### 参考
- java.net.URLDecoder.decode()

- https://zh.wikipedia.org/wiki/UTF-8 UTF-8

- https://zh.wikipedia.org/wiki/UTF-16 UTF-16

- https://blog.csdn.net/hezh1994/article/details/78899683 彻底弄懂 Unicode 编码

- https://blog.csdn.net/sinat_38816924/article/details/78438070

- https://blog.csdn.net/iteye_13222/article/details/82636048 java 中文字符串，utf-8编码为byte数组的计算过程

- https://blog.csdn.net/zx1749623383/article/details/79540748 Java编码和解码Unicode

- https://blog.csdn.net/e19901004/article/details/103880863 判断字符串中是否含有4字节字符（UTF8编码）

- https://www.cnblogs.com/weizhxa/p/12010890.html 特殊字符(包括emoji)梳理和UTF8编码解码原理

- https://blog.csdn.net/left_la/article/details/36188181 Unicode详解(UCS-2,UCS-4,UTF-8,UTF-16,UTF-32)

- http://www.fmddlmyy.cn/text6.html 谈谈Unicode编码，简要解释UCS、UTF、BMP、BOM等名词

- https://tool.lu/hexconvert/ 进制转换

- http://tool.chinaz.com/tools/urlencode.aspx  URL编码/解码

- https://design215.com/toolbox/utf8-4byte-characters.php UTF-8 4-BYTE CHARACTER CHART
