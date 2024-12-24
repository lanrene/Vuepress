# 如何让旧墨水屏设备也用上微信读书

在浏览 B 站时，我发现“能不能使用微信读书”，已经成为选择墨水屏设备的重要标准之一。

如果我们想让手里的老设备重获新生，不再吃灰，那么微信读书是必须安排上的。

大家应该都知道，微信读书专门为Kindle制作了一个网页版本。

这次，我们就通过将设备伪装成 Kindle，来实现微信读书自由。

### 原理

Web 服务器通过 **UA（User Agent，浏览器标识）** 来确认设备信息。我们只需将 UA 修改为 Kindle 的 UA，即可实现设备伪装。

下面这段就是 Kindle 的浏览器标识

```
Mozilla/5.0 (X11; U; Linux armv7l like Android; en-us) AppleWebKit/531.2+(KHTML, like Gecko) Version/5.0 Safari/533.2+Kindle/3.0+
```

### 实现方式

#### 1. 可以自定义 UA 的浏览器

> 手机截图会更清晰，这里使用手机截图演示

::: tabs
@tab 步骤 1
**进入 Via 主页，点击设置**

![](/images/via_ua_01.png =260x)

@tab 步骤 2
**点击设置**

![](/images/via_ua_02.png =260x)

@tab 步骤 3
**选择通用**

![](/images/via_ua_03.png =260x)

@tab 步骤 4
**点击浏览器标识**

![](/images/via_ua_04.png =260x)

@tab 步骤 5
**右上角 ＋，新建浏览器标识**

![](/images/via_ua_05.png =260x)

@tab 步骤 6
**填写名称和 Kindle 的 UA后保存**

![](/images/via_ua_06.png =260x)

@tab 步骤 7
**选择新添加的 Kindle UA**

![](/images/via_ua_07.png =260x)

@tab 效果展示
**此时访问微信读书**

![](/images/via_ua_08.png =260x)
:::

#### 2. 开源阅读订阅源

::: tabs
@tab 步骤 1
**进入开源阅读主页，点击订阅 tab**

![](/images/yuedu_dy_01.png =260x)

@tab 步骤 2
**点击右上角设置**

![](/images/yuedu_dy_02.png =260x)

@tab 步骤 3
**点击右上角菜单**

![](/images/yuedu_dy_03.png =260x)

@tab 步骤 4
**点击网络导入**

![](/images/yuedu_dy_04.png =260x)

@tab 步骤 5
**输入[https://lanrene.github.io/vuepress/shuyuan/weread_web.json](https://lanrene.github.io/vuepress/shuyuan/weread_web.json), 并确认**

![](/images/yuedu_dy_05.png =260x)

@tab 步骤 6
**确认导入**

![](/images/yuedu_dy_06.png =260x)

@tab 步骤 7
**回到订阅页，点击我们新导入的订阅源**

![](/images/yuedu_dy_07.png =260x)

@tab 效果展示
**此时访问微信读书**

![](/images/yuedu_dy_08.png =260x)
:::

### 真机效果展示

::: tip
如果发现文字显示乱码，不用着急，等一会儿就好了。
:::

![](/images/via_weread.png)