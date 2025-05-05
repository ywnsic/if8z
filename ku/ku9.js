function main(item) {
    let url = item.url;
    let id = ku9.getQuery(url, "id");

    // 注入全屏播放的JS代码
    const jscode = `
(function(){
    const startTime = Date.now();
    
    // 隐藏网页内容
    // 将整个视口背景设为黑色
document.documentElement.style.backgroundColor = 'black';
document.documentElement.style.height = '10%';
document.documentElement.style.margin = '0';
document.documentElement.style.padding = '0';

// 隐藏body内容但保留背景（需确保body不覆盖html背景）
document.body.style.visibility = 'hidden';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.minHeight = '10vh'; // 确保高度覆盖视口

// 保持原有获取Shadow DOM视频的逻辑
function getVideoParentShadowRoots() {
  const allElements = document.querySelectorAll('*');
  for (const element of allElements) {
    const shadowRoot = element.shadowRoot;
    if (shadowRoot) {
      const video = shadowRoot.querySelector('video');
      if (video) return video;
    }
  }
  return null;
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