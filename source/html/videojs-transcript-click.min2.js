/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /gh/tombyrer/videojs-transcript-click@1.0.0/dist/videojs-transcript-click.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,e){"use strict";var n={settings:{},prefix:"transcript"};n.player=this;var r,i,a,o={autoscroll:!0,clickArea:"text",showTitle:!0,showTrackSelector:!0,followPlayerTrack:!0,stopScrollWhenInUse:!0},s=(r=n,{secondsToTime:function(t){var e=Math.floor(t/3600),n=Math.floor(t%3600/60),r=Math.floor(t%60);return r=r<10?"0"+r:r,n=e>0&&n<10?"0"+n:n,e>0?e+":"+n+":"+r:n+":"+r},localize:function(t){return t},createEl:function(t,e){e=e||"";var n=document.createElement(t);return n.className=r.prefix+e,n},extend:function(t){var e,n,r=typeof t;if(!("function"===r||"object"===r&&t))return t;for(var i=1,a=arguments.length;i<a;i++)for(n in e=arguments[i])t[n]=e[n];return t}}),c={handlers_:[],on:function(t,e,n){if("function"!=typeof n)throw new TypeError("Callback is not a function.");this.handlers_.push([t,e,n])},trigger:function(t,e){this.handlers_.forEach(function(n){n[0]===t&&n[1]===e&&n[2].apply()})}},l=(i=function(t,e,n){var r=Date.now(),i=t.scrollTop,a=this;e=Math.max(0,e);var o=(e=Math.min(t.scrollHeight-t.clientHeight,e))-i,s=function(){var c=Date.now()-r;a.isAutoScrolling=!0,t.scrollTop=function(t,e,n,r){return e+n*Math.sin(Math.min(1,t/r)*(Math.PI/2))}(c,i,o,n),t.scrollTop!==e&&requestAnimationFrame(s,t)};requestAnimationFrame(s,t)},{init:function(t,e){return this.element=t,this.userIsScrolling=!1,this.mouseIsOverTranscript=!0,this.isAutoScrolling=!0,function(t){var e=this;t.addEventListener("scroll",function(){e.isAutoScrolling?e.isAutoScrolling=!1:(e.userIsScrolling=!0,t.classList.add("is-inuse"))}),t.addEventListener("mouseenter",function(){e.mouseIsOverTranscript=!0}),t.addEventListener("mouseleave",function(){e.mouseIsOverTranscript=!1,setTimeout(function(){e.mouseIsOverTranscript||(e.userIsScrolling=!1,t.classList.remove("is-inuse"))},1e3)})}.call(this,this.element),this},to:function(t){if(this.canScroll()){var e,n=t.parentElement,r=n.offsetTop+n.clientHeight,a=t.offsetTop+t.clientHeight,o=t.offsetTop-n.offsetTop,s=t.offsetTop+t.clientHeight-n.offsetTop;o<n.scrollTop?e=t.offsetTop-n.offsetTop:s>n.scrollTop+n.clientHeight&&(e=a-r),void 0!==e&&n.scrollTop!==e&&i.call(this,n,e,400)}},canScroll:function(){var t=this.element;return t.scrollHeight>t.offsetHeight},inUse:function(){return this.userIsScrolling}}),u={get:function(){var t,e,r=[];for(n.tracks=n.player.textTracks(),t=0;t<n.tracks.length;t++)"captions"!==(e=n.tracks[t]).kind&&"subtitles"!==e.kind||r.push(e);return r},active:function(t){var e,r;for(e=0;e<n.tracks.length;e++)if("showing"===(r=n.tracks[e]).mode)return a=r,r;return a||t[0]}},d=function(e){var n={element:{},body:{}},r=function(t){c.trigger(this,t)},i=function(t){var n=t.target.classList,r=t.target.getAttribute("data-begin")||t.target.parentElement.getAttribute("data-begin");null!=r&&("line"===e.settings.clickArea||"timestamp"===e.settings.clickArea&&n.contains(e.prefix+"-timestamp")||"text"===e.settings.clickArea&&n.contains(e.prefix+"-text"))&&e.player.currentTime(r)},a=function(t){var e=s.createEl("div","-line"),n=s.createEl("span","-timestamp"),r=s.createEl("span","-text");return e.setAttribute("data-begin",t.startTime),n.textContent=s.secondsToTime(t.startTime),r.innerHTML=t.text,e.appendChild(n),e.appendChild(r),e},o=function(r){"object"!=typeof r&&(r=e.player.textTracks()[r]);var c,u,d,f=s.createEl("div","-body"),p=document.createDocumentFragment();if(r.activeCues){var h=r.cues;for(u=0;u<h.length;u++)c=a(h[u]),p.appendChild(c);f.innerHTML="",f.appendChild(p),f.setAttribute("lang",r.language),f.scroll=(d=f,Object.create(l).init(d)),f.addEventListener("click",i),n.element.replaceChild(f,n.body),n.body=f}else"showing"!==r.mode&&(r.mode="hidden"),t.setTimeout(function(){o(r)},100)},u=function(t,e){o(t,e)};return{create:function(){var t,i=document.createElement("div");if(n.element=i,i.setAttribute("id",e.prefix+"-"+e.player.id()),e.settings.showTitle){var a=((t=s.createEl("header","-header")).textContent=s.localize("Transcript"),t);i.appendChild(a)}if(e.settings.showTrackSelector){var o=function(){var t=s.createEl("select","-selector");return e.validTracks.forEach(function(e,n){var r=document.createElement("option");r.value=n,r.textContent=e.label+" ("+e.language+")",t.appendChild(r)}),t.addEventListener("change",function(t){u(document.querySelector("#"+e.prefix+"-"+e.player.id()+" option:checked").value),r("trackchanged")}),t}();i.appendChild(o)}return n.body=s.createEl("div","-body"),i.appendChild(n.body),u(e.currentTrack),this},setTrack:u,setCue:function(t){var r,i,a,o,s=n.body.children;for(r=0;r<s.length;r++)a=(i=s[r]).getAttribute("data-begin"),o=r<s.length-1?s[r+1].getAttribute("data-begin"):e.player.duration()||1/0,t>a&&t<o?i.classList.contains("is-active")||(i.classList.add("is-active"),!e.settings.autoscroll||e.settings.stopScrollWhenInUse&&n.body.scroll.inUse()||n.body.scroll.to(i)):i.classList.remove("is-active")},el:function(){return n.element},on:function(t,e){c.on(this,t,e)},trigger:r}}(n);e.registerPlugin("transcript",function(t){n.player=this,n.validTracks=u.get(),n.currentTrack=u.active(n.validTracks),n.settings=e.mergeOptions(o,t),n.widget=d.create();var r=function(){n.currentTrack=u.active(n.validTracks),n.widget.setTrack(n.currentTrack)};if(!(n.validTracks.length>0))throw new Error("videojs-transcript: No tracks found!");return r(),n.player.on("timeupdate",function(){n.widget.setCue(n.player.currentTime())}),n.settings.followPlayerTrack&&(n.player.on("captionstrackchange",r),n.player.on("subtitlestrackchange",r)),{el:function(){return n.widget.el()},setTrack:n.widget.setTrack}})}(window,videojs);
//# sourceMappingURL=/sm/671a5ba99bb1908441ce7e3dd958e1bdd3d83298d97c9fae610229040ff7ba22.map