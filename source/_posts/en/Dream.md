---
title: Dream
lang: en
date: 2024-11-02 20:49:37
tags:
categories:
---



  <link href="/html/video-js.css" rel="stylesheet" />
  <link href/html/videojs-transcript.css" title="CDN" rel="stylesheet">
  <!-- local dev: -->
  <!-- <link href="/css/videojs-transcript.css" title="Example 1" rel="stylesheet">
  <link href="/css/videojs-transcript2.css" title="Example 2" rel="alternate stylesheet">
  <link href="/css/videojs-transcript3.css" title="Example 3" rel="alternate stylesheet"> -->
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .info {
      background-color: #eee0;
      border: thin solid #3330;
      border-radius: 0px;
      padding: 0 0px;
      text-align: left;
    }
    .video-js {
      margin: 0px 0;
    }
  </style>
  <script src="/html/video.js"></script>
  <script src="/html/videojs-transcript-click.min.js"></script>

  <div class="info">
    <p style="margin-top: 0px; margin-bottom: 0px; color:#ff3502; font-size: 20px;">
      遇光见影,遇你见爱
    </p>
  </div>
  <div class="video-container">
    <video id="video"
           class="video-js vjs-default-skin"
           height="400px"
           width="600px"
           controls>
      
      <source src="" type="video/webm">
      <source src="/Yu/10.Things.I.Hate.About.You.1999.mp4" type="video/mp4">
      <track kind="captions" src="" srclang="en" label="English" default>
      <track kind="captions" src="LZ.vtt" srclang="Egnlish" label="Swedish">
      <track kind="captions" src="LZ.vtt" srclang="ru" label="Russian">
      <track kind="captions" src="https://cdn.jsdelivr.net/gh/tombyrer/videojs-transcript-click@1.0/demo/captions.ja.vtt" srclang="ja" label="Japanese">
      <track kind="captions" src="https://cdn.jsdelivr.net/gh/tombyrer/videojs-transcript-click@1.0/demo/captions.ar.vtt" srclang="ar" label="Arabic">
      <!-- local dev: -->
      <!-- <track kind="captions" src="captions.en.vtt" srclang="en" label="English" default>
      <track kind="captions" src="captions.sv.vtt" srclang="sv" label="Swedish">
      <track kind="captions" src="captions.ru.vtt" srclang="ru" label="Russian">
      <track kind="captions" src="captions.ja.vtt" srclang="ja" label="Japanese">
      <track kind="captions" src="captions.ar.vtt" srclang="ar" label="Arabic"> -->
    </video>
    <div id="transcript"></div>
  </div>
  <script>
    var video = videojs('video')
    video.ready(function(){
        // fire up the plugin
        var transcript = this.transcript();
        // attach widget to the page
        var transcriptContainer = document.querySelector('#transcript');
        transcriptContainer.appendChild(transcript.el());
    });
  </script>