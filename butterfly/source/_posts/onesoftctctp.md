---
cover: https://dsm01pap001files.storage.live.com/y4mpUZrOq5ReDyCesayWQvAEefFNaw5NbQ0BYyeMUFeCemCshTWUDTwwJg5nq6VIy9uHIaNJG0APeQBCNvlENnDUo8_pMvbIcwNHK7dLlm7QjkJGQhamhRVMK3dT5iXEOQAxv19QSKOh5VqBbIpCGXzpk0-JNbu_UMYqSaMrszSi6IUxHj2vV70qZ08a2gE3Tww?width=720&height=1024&cropmode=none
title: 一个好用的手机投影电脑的软件
date: 2021-09-23 23:25:29
description: scrcpy使用教程
tags: 
- cmd 
- powershell
---

# 前言

> ## 桌面端环境
Windows、Linux、MacOS  

## 使用scrcpy的优点

   画面（1920×1080或以上）  
   低延迟（35-70ms）  
   启动迅速（<1秒显示第一张图像）  
   非依赖性（设备上未安装任何东西）  
   设备要求：Android 5.0以上  

# 如何使用scrcpy

>  手机端开启adb  
>  PC端下载scrcpy  

## 如何打开adb调试
（若已经打开可以跳过这一步）  

以MIUI 12.5为例  

 * **打开开发者模式**

![打开开发者模式](https://dsm01pap001files.storage.live.com/y4myFf8r4Re-kRFAxcEGnqa2XGHrHGcWkJRZOyN49QxGZKM1ffZtDChMTCj-7KBZM5EFBjl_Qt2SSSRcf_ahZSxodwHViA3uGWUJkrGX6L-UqH5D5O_tIEymFHFPdMLjv2TG-OSZT-6a1lsBW4yJOs49cTfy980gvxLTn-LNHaqL6BbXthR8b7_ON1ebNln2O_v?width=461&height=1024&cropmode=none)

--------

 * **进入开发者模式**

![进入开发者模式](https://dsm01pap001files.storage.live.com/y4mjJcXGyOhmguLn9Ojnd-kdUHyESb17zQiSpViWiupyIJz8s_4H3XSinKOKAjvbGYbyDoNq_MQlPDHzpZF2uC5svjmbib0cYZ7wiXRIeb6i_tuh7XiqG7gRedEarBVpgifEgcJVZBXhFfIi0Y1Mz_Gwm2fP4FvMJNnd1rguZfq8m-O_XgApM5or0LMDLq_BwpS?width=461&height=1024&cropmode=none)

--------

 * **打开ADB调试**

![打开ADB调试](https://dsm01pap001files.storage.live.com/y4mfHmYJswvkqMve0gTxpJX6spJqNVafq4SozGCnfPGX0xaJ7kr37T7aOvTl215MvBra8jp3R92UyXDzTN0iXDhCaVw5uBjlYtGxK0cB1nDz0Vv0e-7syK19z3UfUw63yXbaxPQcn-x7qMD9fjuebCUWdGlXn0l6z4EXUHgwyMKg1UdjxY5fol2sB3mdOeDg7pn?width=461&height=1024&cropmode=none)

--------

 ## 连接电脑

>  **同意ADB调试**

![同意ADB调试](https://dsm01pap001files.storage.live.com/y4mMgB1U7kI4l_GY-GrPA-ISyeX9NZpQWEh-Zspp6AuqdoRMkH5Vd7KFsqX8jhIPflS9cct1aMqYlWVWtnJAjuz8KRKNMuPoDQxqo0XDFDtPB_iSe0U0PtBky6zMUvbk5vS3aFmSsJP0o-q-dbJMzNDa8tfYLLBfsGKlywv-fwgZStlqxnDDnmzmSKrKpRo3FHZ?width=1080&height=790&cropmode=none) 

--------

### **有线连接**

直接运行scrcpy-console.bat即可通过有线方式连接

--------

### **无线连接**

>  可使用powershell和cmd进行命令输入  
>  此处仅展示powershell，命令基本一致（cmd下不输入 .\adb ，直接输入 adb 即可执行命令）  

--------

输入此查看你的设备是否在线

```powershell 
.\adb devices
```

如果在线，则应会显示如下图类似的文字
![设备在线](https://dsm01pap001files.storage.live.com/y4mvJ8fiNtV3Shi8uR4LVruhCg-JBKjX8Iwr7LmHNVO8UpuJSBVqBJpYLzT7FHeDt5rZSKqv8OMq_O5TCg_mGD3Mpcc1VmDpVzam_s4LO-V1epupolPLJfd1ZoF5vsdqu0SvX5gjRLRDj6JO6kM87EKkWE645JsQpjJEHB9O12MTckyRhq52YYV_EZjOco8scG7?width=586&height=91&cropmode=none)

--------

确认设备在线后输入以下命令获取手机ip地址

```powershell
.\adb shell config 
```

应有如下显示
![获取手机端ip地址](https://dsm01pap001files.storage.live.com/y4mE__Y6BQJPgLsANoYuayjl60M5Edi1ep59krBKCoSYFiZ5M7L4kh2rn_6zwMXydeKQrgBdO_phv4jhcVaMxwwLL2w0YqVlNAmuM8DYh9M_EI28DxKH9DxWYma-YxJju4ftuKt1YEklshyxXakrJYp44othfz_I2nxsktExyB44o6vtiOKSXcPfz9ji2wsLS7Y?width=634&height=192&cropmode=none)

--------

若有，则键入如下命令

```powershell
.\adb tcpip 6666
```

6666代表的是你的手机要开放的端口号，可自由更改  
原生安卓系统可以直接打开无线调试，但我手上的k30i 5G似乎屏蔽了无线调试功能  
手机需要和电脑处在同一网络中  

--------

拔掉数据线，在powershell中输入  

```powershell
.\adb connect 192.168.1.17:6666
```

出现如下图片即代表已经和手机建立连接
![与手机成功建立连接](https://dsm01pap001files.storage.live.com/y4mcKwGH_MwRJN3Xvnj52NUK4he-UEV0gFz0NSvmPyza5aklPVUbxm0ABMYjUH2bH_u6vdQuLoitm2TtYJVgGPuSitsTrgvqiQWf-K4BqPjXHkgtmHRC5HFnqTevOvs7SOumSbEVmGvfqv4Lhy8sLQQAj-HddKj3zDx9aDE3U4FUq7C4CHviU5yxymuWz5tqNr8?width=635&height=68&cropmode=none)

--------

键入如下命令即可与手机端建立无线连接  
（cmd下可以直接输入scrcpy）  
```powershell
.\scrcpy
```

与手机成功建立连接如图
![与手机成功建立连接](https://dsm01pap001files.storage.live.com/y4mSpjiaEGMQHgbwikDjqnH2r3ABGCVtUbCNjW8vwZbdo2GG1-2GlgpVmoNOjVQco_z6Ob_hpURfbJrdRmv9FXroK3gJld_fErrEFWG9PF4eO1hq89Bu3QWPudQWDxZydHN6h9Wat4c7jD68WQ-vxjW_Qgy1A_RDpoBTb-yq2fnYVNUp4eTakHe8JT6Th7r3HLs?width=950&height=129&cropmode=none)

--------

整理命令如下
```powershell
.\adb devices
.\adb shell config
.\adb tcpip 端口号
.\adb connect 手机ip地址
.\scrcpy
```
--------

# 补充操作 (CMD)

>  以下补充转自https://blog.csdn.net/aa464971/article/details/83349215

```cmd
#帮助
scrcpy --help

#设置码率（默认8M）
scrcpy -b 8M

#限制投屏尺寸
scrcpy -m 1024

#裁剪投屏屏幕(长:宽:偏移x:偏移y)
scrcpy -c 800:800:0:0

#投屏并录屏
scrcpy -r file.mp4

#不投屏只录屏
scrcpy -Nr file.mp4

#手指触摸的时候显示轨迹球
scrcpy -t

#一些快捷键
切换全屏模式 Ctrl+f
将窗口调整为1：1（完美像素） Ctrl+g
调整窗口大小以删除黑色边框 Ctrl+x | 双击黑色背景
设备HOME键 Ctrl+h | 鼠标中键
设备BACK键 Ctrl+b | 鼠标右键
设备任务管理键 Ctrl+s
设备 菜单 键 Ctrl+m
设备音量+键 Ctrl+↑
设备音量-键 Ctrl+↓
设备电源键 Ctrl+p
点亮手机屏幕 鼠标右键
复制内容到设备 Ctrl+v
启用/禁用FPS计数器（stdout） Ctrl+i
安装APK 将apk文件拖入投屏
传输文件到设备 将文件拖入投屏（非apk）
```

部分内容来自[Ashin10](https://www.jianshu.com/p/3f9116fb39ad)   

scrcpy的github链：https://github.com/Genymobile/scrcpy  