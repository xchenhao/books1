## Shell 学习 1

```bash
#!/bin/bash

#echo $$
#echo $0
#echo $1,$2
#echo $#
#echo $@
#echo $?

#str=$1
#if ! [ -z $str ];then
 #   echo "no args"
   # exit 3
#fi
#clear
#echo "haha"

#for (( i=1; i<30; i++ ))
#do
	#echo -n "hello world"
#	echo "hello world"
#done

#haha=0
#for (( i=1; i>0; i++ ))
#do
#  echo -n "Enter Number Between(5~9): "
#   read haha
#  echo "Your Input Is: " $haha
#done

# Normal
echo -e "\033[0m Hello World"
# White font
echo -e "\033[1m Hello World"
# black bg
echo -e "\033[5m Hello World"

# Red
echo -e "\033[31m Hello World"
# Green
echo -e "\033[32m Hello World"
# Yellow
echo -e "\033[33m Hello World"
# Deep Blue
echo -e "\033[34m Hello World"
# Pink
echo -e "\033[35m Hello World"
# Light Blue
echo -e "\033[36m Hello World"

# Red Bg
#echo -e "\033[41m Hello World"
# Green Bg
#echo -e "\033[42m Hello World"
# Yellow Bg
#echo -e "\033[43m Hello World"
# Deep Blue Bg
#echo -e "\033[44m Hello World"
# Pink Bg
#echo -e "\033[45m Hello World"
# Light Blue Bg
#echo -e "\033[46m Hello World"

for fly in "hello" "my" "great" "world"
#for fly in $(ls ./)
do
	echo "$fly "
done

hey=0
while [ $hey == 0 ]
do
	echo -n "Enter The Number: "
	read hey
	echo "Your Input Is: " $hey
done

echo "----------------"

hei=1
until [ $hei == 0 ]
do
    echo -n "Enter The Number2: "
    read hei
    echo "Your Input2 Is: " $hei
done


echo "==============="
num=0
echo -n "Enter New Number: "
read num
while [ true ]
do
	case $num in
		1) echo "num.1";;
		[2-7]) echo "num.2";;
		8) echo "num.3";;
		9) echo "num.4";;
		[a-z]) echo "what";;
		[A-Z]) echo "My God";;
		*) echo "wrong";;
	esac
	echo -n "Try Again: "
	read num
done
```

### 编辑记录
创建：12-22-2018 00:05 周六<br />
