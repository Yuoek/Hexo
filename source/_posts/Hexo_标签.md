---
layout: _posts
title: Hexo_标签
date: 2024-01-16
mathjax: true
tag: 练习
categories: 
- [Hexo, 标签]
---

Hexo 标签，以备遗忘

![Liiany](images/fly.png)

<!--more-->

## 一. Pdf 书籍插入

```markdown
<iframe src="Yu/Books/1.pdf" style="width:100%; height:1080px;" frameborder="0"></iframe>
```


## 二. Latex公式

$$\begin{split}
\cos 2x &= \cos^2x - \sin^2x \\\\
&=2\cos^2x-1
\end{split}$$

$$
f(n) =
\begin{cases} 
n/2,  & \text{if }n\text{ is even} \\\\
3n+1, & \text{if }n\text{ is odd}
\end{cases}
$$

```latex

$$\begin{split}
\cos 2x &= \cos^2x - \sin^2x \\\\
&=2\cos^2x-1
\end{split}$$

$$
f(n) =
\begin{cases} 
n/2,  & \text{if }n\text{ is even} \\\\
3n+1, & \text{if }n\text{ is odd}
\end{cases}
$$
```

## 三. Markmap 标签


{% markmap 400px %}
- links

- **inline** ~~text~~ *styles*

- multiline
  text
  
- `inline code`

- 遇光见影，遇你见爱！

- KaTeX - $x = { -b \pm \sqrt{b^2-4ac } \over 2a}$

- IMG <img src="https://www.feloy.top/images/flyfull.png" style="zoom:25%;" />

{% endmarkmap %}


```markdown
{% markmap 400px %}
- links

- **inline** ~~text~~ *styles*

- multiline
  text
  
- `inline code`

- 遇光见影，遇你见爱！

- KaTeX - $x = { -b \pm \sqrt{b^2-4ac } \over 2a}$

- IMG <img src="https://www.feloy.top/images/flyfull.png" style="zoom:25%;" />

{% endmarkmap %}
```

## 四. Dplayer视频


| 空镜头                                                       | 全景                          | 特写                          |
| ------------------------------------------------------------ | ----------------------------- | ----------------------------- |
| {% dplayer "url=/vedio/1.mp4" "suburl=/vedio/1.vtt" %} | {% dplayer "url=/Yu/1.mp4" %} | {% dplayer "url=/Yu/1.mp4" %} |
| 空镜头                                                       | 全景                          | 特写                          |
| {% dplayer "url=/vedio/1.mp4" "suburl=/vedio/1.vtt" %} | {% dplayer "url=/Yu/1.mp4" %} | {% dplayer "url=/Yu/1.mp4" %} |


```markdown
| 空镜头                                                       | 全景                          | 特写                          |
| ------------------------------------------------------------ | ----------------------------- | ----------------------------- |
| {% dplayer "url=/vedio/1.mp4" "suburl=/vedio/1.vtt" %} | {% dplayer "url=/Yu/1.mp4" %} | {% dplayer "url=/Yu/1.mp4" %} |
| 空镜头                                                       | 全景                          | 特写                          |
| {% dplayer "url=/vedio/1.mp4" "suburl=/vedio/1.vtt" %} | {% dplayer "url=/Yu/1.mp4" %} | {% dplayer "url=/Yu/1.mp4" %} |
```

## 五. Echarts 图片

ifreme 引入 html 文件

## 六. Aplayer 音乐


网易云音乐


{% meting "1978921795" "netease" "playlist" "mutex:true" "theme:#777777" %}


```markdown
{% meting "1978921795" "netease" "playlist" "mutex:true" "theme:#777777" %}
```

