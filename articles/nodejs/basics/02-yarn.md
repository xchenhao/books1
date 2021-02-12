# Yarn 使用入门

Yarn 对你的代码来说是一个包管理器。它可以让你使用并分享全世界开发者的（例如 JavaScript）代码。 Yarn 能够快速、安全、并可靠地完成这些工作，所以你不用有任何担心。

通过Yarn你可以使用其他开发者针对不同问题的解决方案，使自己的开发过程更简单。 

代码通过包（package） (或者称为 模块（module）) 的方式来共享。 一个包里包含所有需要共享的代码，以及描述包信息的文件，称为 package.json。

### 1、安装

yarn 安装请进 [传送门](https://yarn.bootcss.com/docs/install/#mac-stable)

### 2、Yarn 使用方法

现在 Yarn 已经 安装完毕，可以开始使用了。 以下是一些你需要的最常用的命令：

#### 2.1 初始化一个新项目

```
yarn init
```

#### 2.2 添加依赖包

```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```


#### 2.3 将依赖项添加到不同依赖项类别中

分别添加到 devDependencies、peerDependencies 和 optionalDependencies 类别中：

```
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

**devDependencies、peerDependencies 和 optionalDependencies区别**

在一个Node.js项目中，package.json几乎是一个必须的文件，它的主要作用就是管理项目中所使用到的外部依赖包，同时它也是npm命令的入口文件。

npm 目前支持以下几类依赖包管理：

+ dependencies
+ devDependencies
+ peerDependencies
+ optionalDependencies
+ bundledDependencies / bundleDependencies

**dependencies**

应用依赖，或者叫做业务依赖，这是我们最常用的依赖包管理对象！它用于指定应用依赖的外部包，这些依赖是应用发布后正常执行时所需要的，但不包含测试时或者本地打包时所使用的包。

**devDependencies**

开发环境依赖，仅次于dependencies的使用频率！它的对象定义和dependencies一样，只不过它里面的包只用于开发环境，不用于生产环境，这些包通常是单元测试或者打包工具等，例如gulp, grunt, webpack, moca, coffee等。

**peerDependencies**

同等依赖，或者叫同伴依赖，用于指定当前包（也就是你写的包）兼容的宿主版本。如何理解呢？ 试想一下，我们编写一个gulp的插件，而gulp却有多个主版本，我们只想兼容最新的版本，此时就可以用同等依赖（peerDependencies）来指定。

```json
{
  "name": "gulp-my-plugin",
  "version": "0.0.1",
  "peerDependencies": {
    "gulp": "3.x"
  }
}
```

**optionalDependencies**

可选依赖，如果有一些依赖包即使安装失败，项目仍然能够运行或者希望npm继续运行，就可以使用optionalDependencies。另外optionalDependencies会覆盖dependencies中的同名依赖包，所以不要在两个地方都写。

**bundledDependencies / bundleDependencies**

打包依赖，bundledDependencies是一个包含依赖包名的数组对象，在发布时会将这个对象中的包打包到最终的发布包里。

#### 2.4 升级依赖包

```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

#### 2.5 移除依赖包

```
yarn remove [package]
```

#### 2.6 安装项目的全部依赖

```
yarn
```

或者

```
yarn install
```

