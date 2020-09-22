# Git 教程

```sh
# 删除远程 test 分支
git push -u origin :test
# 或
git push origin --delete test

# 推送本地分支 localbranch 至远程分支 remotebranch
git push origin localbranch:remotebranch


# 打包
git bundle create myrepo.bundle HEAD master
# 对指定的提交区间进行打包
git bunlle create commits.bundle master ^9a466c5
# 验证是否是合法的 Git 包
git bundle verify ./myrepo.bundle
# 查看包中可以导入的分支
git bunlde list-heads ./myrepo.bundle
# 解包
cd ../
git clone myrepo.bundle testrepo
# 从包中取出 master 分支到仓库的 other-master 分支
git fetch ./myrepo.bundler master:other-master



```

### 参考
- <https://git-scm.com/book/zh/v2/Git-工具-打包>
