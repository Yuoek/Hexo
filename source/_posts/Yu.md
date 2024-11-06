---
layout: posts
title: Y
date: 2024-10-30 
tags: Y
categories: 
- [日记, Y]
---

# Yuoek



<center><font color=#6f5dee>我想看看自己出鞘后的样子 </font></center>



<!--more-->


有更大的梦想就去做吧，你值得更优秀！



termux 设置默认启动文件夹
在 Termux 中，你可以通过修改 `.bashrc` 文件来设置默认启动文件夹。以下是一般的步骤：

1. 打开 Termux 应用。

2. 输入以下命令来编辑 `.bashrc` 文件：

   ```
   nano ~/.bashrc
   ```

3. 在 `.bashrc` 文件中，找到以下行：

   ```
   cd ~
   ```

   这行代码表示默认进入用户的主目录。

4. 将 `cd ~` 替换为你想要设置为默认启动文件夹的路径。例如，如果你想将默认启动文件夹设置为 `/sdcard/Documents`，则将该行替换为：

   ```
   cd /sdcard/Documents
   ```

5. 按下 `Ctrl + X` 组合键，然后按 `Y` 键保存修改并退出 `nano` 编辑器。

6. 为了使修改生效，输入以下命令来重新加载 `.bashrc` 文件：

   ```
   source ~/.bashrc
   ```

现在，当你重新打开 Termux 时，它将默认进入你设置的文件夹。

请注意，上述步骤中的文件夹路径应根据你的实际需求进行修改。此外，不同的 Android 设备和文件系统结构可能会有所不同，你可能需要根据自己的情况调整文件夹路径。
