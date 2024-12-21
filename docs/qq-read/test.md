
## ROOT 设备

::: caution
此操作极度危险，容易致使设备变砖，无法修复。不建议小白尝试。
:::

ROOT 可以更好的掌控手机，获得更好的玩体验。比如更换字体等。

### 实现方法

利用**脏牛漏洞**（这里使用开源项目 [GetRoot-Android-DirtyCow](https://github.com/j0nk0/GetRoot-Android-DirtyCow)），获取临时 ROOT 权限。

然后通过 `dd 命令`提取 boot.img，以及刷入面具修补后的boot。

### 前提条件

- 电脑
- Micro USB 数据线（需要有数据传输能力）

### 准备工作

::: tip
ROOT 方法与软件安装步骤相关，如果没有过该操作，请浏览[安装软件](#软件安装)，并完成桌面软件 `E-Ink Launcher` 和 文件管理软件 `MT 管理器` 的安装。
:::

- 下载安装[《搞机工具箱》](https://jamcz.com/gjgjx/)
> 完成安装软件的同学已经完成该项准备

- 下载面具 [Magisk]()

- 确保已经安装了桌面应用和文件管理应用

### 操作步骤

#### 1. QQ 阅读器打开 ADB 调试

> 详见上面[安装步骤](#_1-qq-阅读器打开-adb-调试)

#### 2. 用数据线连接电脑和 QQ 阅读器

#### 3. 电脑打开《搞机工具箱》

切换到`ADB终端`选项卡，依次复制下面命令到输入框中。

**获取临时 ROOT**
```shell
cd /sdcard
curl https://raw.githubusercontent.com/j0nk0/GetRoot-Android-DirtyCow/refs/heads/master/G1tR0oT -s -o G1tR0oT
```

**提取 boot.img**
```shell
dd if=/dev/block/mmcblk0p21 of=/sdcard/boot.img
```
> boot.img 位置参考 [\[原创\] 已 root 设备中提取 boot.img - 行简](https://bbs.kanxue.com/thread-277700-1.htm)

#### 4. 安装面具

- [Magisk]()

::: tip
必须安装桌面应用[E-Ink Launcher](/vuepress/app/qq-read/EInkLauncher_clone.apk)，才能正常打开安装过的软件。安装方法详见[安装软件](#软件安装)。
:::

#### 5. QQ阅读打开 Magisk

依次点击下面按钮

::: tabs
@tab 1fsd

:::

#### 6. 回到《搞机工具箱》

依次复制下面命令到输入框中。

**获取临时 ROOT**
```shell
cd /sdcard
curl https://raw.githubusercontent.com/j0nk0/GetRoot-Android-DirtyCow/refs/heads/master/G1tR0oT -s -o G1tR0oT
```
**查看修补过的 boot 文件名**
```shell
ll | grep '\.boot$'
```
**将修补过的 boot 刷入**
```shell
dd if=/sdcard/boot.img of=/dev/block/mmcblk0p21/fsdafasdf.img
```
::: warning
这里的 `fsdafasdf.img` 要替换成上面命令输出的名字。
:::


adb shell settings put global adb_enabled 1

adb shell getprop ro.build.type