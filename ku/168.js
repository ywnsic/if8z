附加文档需要对此存储库的写权限。+统一资源定位系统+项目 = ku9.统一资源定位系统 让(身份证, "id");
无包裹
软包通过 = `

突耳
拖拽，
选择或粘贴它们。
附加工资
    
上传你的文件……
我们不支持这种文件类型。
再试一次
有
document.body.style.visibility = 'hidden';
document.body.style.margin = '0';

document.body.style.padding = '0';
文献。本体。样式
//保持原有获取的影子
功能
突耳

按键移动焦点。或者，使用
欧洲心脏病学会
然后
突耳
移动到页面上的下一个交互元素。
欧洲心脏病学会
然后
突耳
    }
  }
移动到页面上的下一个交互元素。
}


    function removeControls() {
      ['#control_bar', '.controls', '.vjs-control-bar', 'xg-controls'].forEach(selector => {
        document.querySelectorAll(selector).forEach(e => e.remove());
      });
    }

    function setupVideo(video) {
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100vw';
      container.style.height = '100vh';
      container.style.zIndex = '2147483647';
      container.style.backgroundColor = 'black';
      video.style.width = '100%';
      video.style.height = '100%';
      video.style.objectFit = 'fill';
      video.style.transform = 'translateZ(0)';
      container.appendChild(video);
      document.body.appendChild(container);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const enterFullscreen = () => {
        if (container.requestFullscreen) {
          container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          container.webkitRequestFullscreen();
        }
        const fullscreenStyle = () => {
          video.style.objectFit = 'contain';
          container.style.width = '100%';
          container.style.height = '100%';
        };
        container.addEventListener('fullscreenchange', fullscreenStyle);
        // 自动播放视频
         // 播放控制
  video.muted = false;
  video.volume = 1;
  video.playsInline = false;
  video.setAttribute('playsinline', 'false');
  try {
    video.play();
  } catch (e) {
    video.muted = true;
    video.play();
  }
        
      };
      setTimeout(enterFullscreen, 300);
    }

    function checkVideo() {
      if (Date.now() - startTime > 15000) {
        clearInterval(interval);
        // 如果超时仍未找到视频，恢复网页内容
        document.body.style.visibility = 'visible';
        document.documentElement.style.visibility = 'visible';
        return;
      }
      let video = document.querySelector('video') || getVideoParentShadowRoots();
      if (video && video.readyState > 0) {
        clearInterval(interval);
        removeControls();
        setupVideo(video);
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        }
        // 显示网页内容
        document.body.style.visibility = 'visible';
        document.documentElement.style.visibility = 'visible';
      }
    }

    const interval = setInterval(checkVideo, 100);
  })();`;

    return {
        webview: id,
        jscode: jscode
    };
}
