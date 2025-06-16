function main(item) {
    const defaultUrl = 'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4';
    
    // 构造请求头
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'origin': 'https://beesport.net',
        'referer': 'https://beesport.net/live-tv'
    };
    
    // 构造 JSON 数据
    const jsonData = JSON.stringify({
        channel: `https://live_tv.starcdnup.com/${item.id}/index.m3u8`
    });
    
    // 发送 POST 请求
    const response = ku9.request(
        'https://beesport.net/authorize-channel',
        'POST',
        headers,
        jsonData,
        true  // 允许重定向
    );
    
    // 处理错误响应
    if (response.code !== 200) {
        return { url: defaultUrl, headers: {} };
    }
    
    // 尝试解析 JSON
    try {
        const data = JSON.parse(response.body);
        
        // 验证响应结构
        if (!data.channels || !Array.isArray(data.channels) || data.channels.length === 0) {
            return { url: defaultUrl, headers: {} };
        }
        
        // 返回有效的播放地址
        return { 
            url: data.channels[0], 
            headers: {'referer': 'https://p.m82xg4z0cdbz7.com/'}  // 可根据实际需要添加播放 headers
        };
        
    } catch (e) {
        // JSON 解析失败
        return { url: defaultUrl, headers: {} };
    }
}

