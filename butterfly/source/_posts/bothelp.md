---
cover: https://dsm01pap001files.storage.live.com/y4m5SjBX8fMb7-6QcOWIMvfwWlrIqs-jvPP-qDNPgWL8MPOhKWgZ2xeT8_SD3ll1r7EcjxcBdEmkT5Akp21CzojUMLI44FkmFhFpT5LP_M4qm1JdV3daEX8eOP-H73Vxxs2Sp0ufrfD2LqdK9VMidqHzLyTnxAr20fnZhR8_t4cPK16kxiTxwNyNd9YOXMYHZuh?width=1972&height=1080&cropmode=none
title: NoneBot v2安装帮助
date: 2022-08-24 22:54:57
description: NoneBot2安装
tags: 
- NoneBot v2
- Python
---

# 前言

> 如果你想查看以前的东西，这里没有备份，只是为了让你能够快速开始NoneBot v2的使用。

# 准备环境
  * 一个能装上Python和nodejs的可用设备
  * 性能及其他组件需达到前置组件最低需求

# 开始安装

## Python及nodejs的安装
> 其实在安装nodejs时会提示是否安装Python及VS预安装环境，这里为了完整讲述故从Python安装开始。

前往Python官网[点击前往](https://www.python.org/downloads/)
选择你要安装的版本，这里不会教你如何安装Python，这里是NoneBot v2的使用教程，不会可以到各大引擎查找关键词条以获得详细方式。

前往nodejs官网[点击前往](https://nodejs.org/zh-cn/download/)
选择你要安装的版本，同上。

## NoneBot v2的安装
> 前往[安装NoneBot2](https://v2.nonebot.dev/docs/next/start/installation)，这里有作者的安装步骤。
  如果你有自己的Python环境管理工具，推荐在环境中创建。

### 脚手架安装
通过pip及其他包管理工具安装nb-cli
```cmd
pip install nb-cli
```
### 从GitHub安装
前往[NoneBot2的GitHub仓库](https://github.com/nonebot/nonebot2)，直接clone。
或者如下方式
git clone https://github.com/nonebot/nonebot2.git
cd nonebot2
pip install
poetry install --no-dev

## 安装cqhttp
前往[go-cqhttp的仓库](https://github.com/Mrs4s/go-cqhttp)下载适合自己的版本。

## 安装附属
> 如果你想偷懒就可以每个驱动器都安装上（:
前往[商店](https://v2.nonebot.dev/store)，选择你要安装的驱动器/适配器/插件，或者可以直接前往别人已经开发好的机器人的代码仓库clone他们的开发成果。

# 开始使用

## 设置cqhttp
启动cqhttp，这里我们只选择反向代理即可，会创建几个文件，找到“config.yml”，键入你的QQ账号，保存并再通过程序推荐的方式启动go-cqhttp，按照方式完成对QQ账号的验证即可，如果被QQ账号风控，让其挂3-5天即可解除。让其在机器人运行时保持运行，以此收发消息。

## 启动机器人

### 空机器人实例
在空文件夹下，打开cmd输入nb create来创建你的第一个机器人实例。
回车选中你要使用的适配器及插件目录，这样你就创建好了你的第一个机器人实例。
在当前文件夹下再次输入nb run来启动机器人

### 已打包好的机器人
在clone后的目录下，打开cmd输入nb run即可运行机器人初步启动。
如果作者有其他关于插件的要求，按照提示即可完成。

# 完成
恭喜你，你已经完成对于一个0编程基础机器人部署使用。