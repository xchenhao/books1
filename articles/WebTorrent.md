### WebTorrent
推荐服务端磁力下载工具 webtorrent，基于 nodeJS

### 下载
```shell
# 安装 webtorrent-cli 工具
npm install webtorrent-cli -g

# 下载命令：webtorrent-cli '磁力链接地址'
# 磁力链接地址左右两边最好加上单引号或双引号（避免有的地址中包含空格时会出错）
webtorrent-cli 'magnet:?xt=urn:btih:d7182883c550102b132f5b5c80ab32dc4490f22c&dn=Westworld S03E03 720p WEB H264-XLF[rarbg]&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Feddie4.nl%3A6969&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969&tr=udp%3A%2F%2Fopentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337'
```

下载过程：可以看到 1G 西部世界第三季第三集视频 61 秒就下完
（下载速度也取决于资源的热度及带宽速度）
```
Downloading: Westworld.S03E03.720p.WEB.H264-XLF[rarbg]
Server running at: http://localhost:8000/2/westworld.s03e03.720p.web.h264-xlf.mkv
Downloading to: /root/test
Speed: 15 MB/s Downloaded: 1.0 GB/1.0 GB Uploaded: 131 KB
Running time: 61 seconds  Time remaining: a few seconds  Peers: 12/55

S   85.146.98.147:61137       0 B        0 B/s        0 B/s       
S   121.98.185.212:6881       0 B        0 B/s        0 B/s       
S   89.141.138.177:51413      0 B        0 B/s        0 B/s       
S   46.7.42.211:55123         0 B        0 B/s        0 B/s       
S   94.209.209.70:57450       0 B        0 B/s        0 B/s       
S   89.173.41.124:13731       0 B        0 B/s        0 B/s       
S   217.132.133.111:58819     0 B        0 B/s        0 B/s       
S   142.116.55.12:51413       21 MB      537 KB/s     0 B/s       
S   71.31.192.95:51413        164 KB     3.3 KB/s     0 B/s       
S   62.1.199.55:21682         0 B        0 B/s        0 B/s       
S   118.208.129.253:61129     0 B        0 B/s        0 B/s       
S   1.65.147.178:16881        317 MB     7.4 MB/s     0 B/s       
S   79.119.103.74:11608       92 MB      1.9 MB/s     0 B/s       
S   194.187.249.52:20008      276 KB     3.3 KB/s     0 B/s       
S   109.151.142.91:55547      10 MB      265 KB/s     0 B/s       
S   81.36.139.182:6881        0 B        0 B/s        0 B/s       
S   81.158.104.241:14241      0 B        0 B/s        0 B/s       
S   82.79.52.165:59246        0 B        0 B/s        0 B/s       
S   ::ffff:99.252.108.18:61987 0 B        0 B/s        0 B/s       
S   177.134.223.186:20546     0 B        0 B/s        0 B/s       
S   218.186.164.159:21604     0 B        0 B/s        0 B/s       
S   134.0.213.188:48801       0 B        0 B/s        0 B/s       
S   202.166.57.167:48707      0 B        0 B/s        0 B/s       
S   83.254.173.221:25163      0 B        0 B/s        0 B/s       
S   62.65.202.25:61775        41 MB      39 KB/s      0 B/s       
S   ::ffff:103.96.87.121:28082 0 B        0 B/s        0 B/s       
S   109.187.240.62:39761      0 B        0 B/s        0 B/s       
S   163.172.215.50:59094      0 B        0 B/s        0 B/s       
S   109.255.126.83:40109      0 B        0 B/s        0 B/s       
S   ::ffff:94.210.109.113:48189 33 KB      0 B/s        0 B/s       
S   207.204.111.94:34324      25 MB      259 KB/s     0 B/s       
S   89.237.108.255:53790      0 B        0 B/s        0 B/s       
S   185.149.90.82:51054       0 B        0 B/s        0 B/s       
S   ::ffff:118.209.80.249:49945 0 B        0 B/s        0 B/s       
S   179.228.139.179:17826     0 B        0 B/s        0 B/s       
S   90.253.219.200:36696      0 B        0 B/s        0 B/s       
S   50.98.99.20:47547         199 MB     4.0 MB/s     0 B/s       
S   194.187.249.62:20760      475 KB     36 KB/s      0 B/s       
S   181.44.150.133:23257      0 B        0 B/s        0 B/s       
                                                            
... and 16 more

torrent downloaded successfully from 12/55 peers in 61s!
```


### 参考
- https://github.com/webtorrent/webtorrent
- https://www.youtube.com/watch?v=RRtNEcAaUO8

