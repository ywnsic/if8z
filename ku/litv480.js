
function main(item) {
  let id = item.id;

  const n = {
    // 频道列表及参数，保持不变
    "4gtv-4gtv016": [2, 6], // 韩国娱乐台
    "4gtv-4gtv152": [5, 6], // 東森新聞
    "4gtv-4gtv001": [2, 6], // 民視台灣台
    "4gtv-4gtv003": [2, 6], // 民視第一台
    "4gtv-4gtv004": [2, 8], // 民視綜藝台
    "4gtv-4gtv006": [2, 9], // 豬哥亮歌廳秀
    "4gtv-4gtv009": [2, 7], // 中天新聞台
    "4gtv-4gtv010": [2, 6], // 非凡新聞台
    "4gtv-4gtv011": [2, 6], // 影迷數位電影台
    "4gtv-4gtv013": [2, 6], // 視納華仁紀實頻道
    "4gtv-4gtv014": [1, 5], // 時尚運動X
    "4gtv-4gtv018": [2, 6], // 達文西頻道
    "4gtv-4gtv034": [2, 6], // 八大精彩台
    "4gtv-4gtv039": [2, 2], // 八大綜藝台
    "4gtv-4gtv040": [2, 6], // 中視
    "4gtv-4gtv041": [2, 6], // 華視
    "4gtv-4gtv042": [2, 6], // 公視戲劇
    "4gtv-4gtv043": [2, 6], // 客家電視台
    "4gtv-4gtv044": [2, 6], // 靖天卡通台
    "4gtv-4gtv045": [2, 6], // 靖洋戲劇台
    "4gtv-4gtv046": [2, 8], // 靖天綜合台
    "4gtv-4gtv047": [2, 8], // 靖天日本台
    "4gtv-4gtv048": [2, 2], // 非凡商業台
    "4gtv-4gtv049": [2, 8], // 采昌影劇台
    "4gtv-4gtv051": [2, 2], // 台視新聞
    "4gtv-4gtv052": [2, 2], // 華視新聞
    "4gtv-4gtv053": [2, 8], // GINX Esports TV
    "4gtv-4gtv054": [2, 8], // Nice TV靖天歡樂台
    "4gtv-4gtv055": [2, 8], // 靖天映畫
    "4gtv-4gtv056": [2, 2], // 台視財經
    "4gtv-4gtv057": [2, 8], // 靖洋卡通Nice Bingo
    "4gtv-4gtv058": [2, 8], // 靖天戲劇台
    "4gtv-4gtv059": [1, 6], // CLASSICA 古典樂
    "4gtv-4gtv061": [2, 7], // 靖天電影台
    "4gtv-4gtv062": [2, 8], // 靖天育樂台
    "4gtv-4gtv063": [2, 6], // KLT-靖天國際台
    "4gtv-4gtv064": [2, 8], // 中視菁采台
    "4gtv-4gtv065": [2, 8], // 靖天資訊台
    "4gtv-4gtv066": [2, 2], // 台視
    "4gtv-4gtv067": [2, 8], // TVBS精采台
    "4gtv-4gtv068": [2, 7], // TVBS歡樂台
    "4gtv-4gtv070": [2, 7], // 愛爾達娛樂台
    "4gtv-4gtv072": [2, 2], // TVBS新聞
    "4gtv-4gtv073": [2, 2], // TVBS
    "4gtv-4gtv074": [2, 2], // 中視新聞
    "4gtv-4gtv076": [2, 2], // CATCHPLAY電影台
    "4gtv-4gtv077": [2, 2], // TRACE Sport Stars
    "4gtv-4gtv079": [2, 2], // ARIRANG阿里郎頻道
    "4gtv-4gtv080": [1, 2], // 中視經典台
    "4gtv-4gtv082": [1, 6], // TRACE Urban
    "4gtv-4gtv083": [1, 6], // Mezzo Live HD
    "4gtv-4gtv084": [1, 6], // 國會頻道1台
    "4gtv-4gtv085": [1, 5], // 國會頻道2台
    "4gtv-4gtv101": [1, 5], // 智林體育台
    "4gtv-4gtv102": [2, 6], // 東森購物1台
    "4gtv-4gtv103": [2, 6], // 東森購物2台
    "4gtv-4gtv104": [2, 6], // 第1商業台
    "4gtv-4gtv109": [2, 6], // 中天亞洲台
    "4gtv-4gtv152": [2, 6], // 東森新聞台
    "4gtv-4gtv153": [1, 2], // 東森財經新聞台
    "4gtv-4gtv155": [2, 6], // 民視
    "litv-ftv03": [1, 6], // VOA美國之音
    "litv-ftv07": [1, 7], // 民視旅遊台
    "litv-ftv09": [2, 2], // 民視影劇台
    "litv-ftv10": [2, 6], // 半島國際新聞台
    "litv-ftv13": [2, 6], // 民視新聞台
    "litv-ftv15": [2, 6], // i-Fun動漫台
    "litv-ftv16": [2, 2], // 好消息
    "litv-ftv17": [2, 2], // 好消息2台
    "litv-longturn01": [1, 2], // 龍華卡通台
    "litv-longturn02": [1, 2], // 龍華洋片台    
    "litv-longturn03": [1, 2], // 龍華電影台
    "litv-longturn04": [1, 6], // 博斯魅力台
    "litv-longturn05": [1, 2], // 博斯高球台
    "litv-longturn06": [1, 2], // 博斯高球二台
    "litv-longturn07": [1, 2], // 博斯運動一台
    "litv-longturn08": [1, 2], // 博斯運動二台
    "litv-longturn09": [1, 2], // 博斯網球台
    "litv-longturn10": [1, 2], // 博斯無限台
    "litv-longturn11": [1, 2], // 龍華日韓台
    "litv-longturn12": [1, 2], // 龍華偶像台
    "litv-longturn13": [1, 2], // 博斯無限二台
    "litv-longturn14": [2, 2], // 寰宇新聞台
    "litv-longturn16": [1, 0], // 寰宇新聞台灣台
    "litv-longturn17": [1, 2], // 亞洲旅遊台
    "litv-longturn18": [1, 6], // 龍華戲劇台
    "litv-longturn19": [1, 6], // Smart知識台
    "litv-longturn20": [1, 6], // ELTV生活英語台
    "litv-longturn21": [1, 2], // 龍華經典台
    "litv-longturn22": [1, 2], // 台灣戲劇台
    "litv-longturn23": [1, 2], // 寰宇財經台     
  };

  // 检查频道 ID 是否存在
  if (!n[id]) {
    return JSON.stringify({
      error: `频道 ID ${id} 不存在`,
      headers: { referer: "https://m2.iptv807.com/" },
    });
  }

  let qlt = n[id][0] + 2;
  let alt = n[id][1];

  let timestamp = Math.floor(Date.now() / 4000 - 355017628);
  let t = timestamp * 4;
  let m3u8 = "#EXTM3U\n";
  m3u8 += "#EXT-X-VERSION:3\n";
  m3u8 += "#EXT-X-TARGETDURATION:4\n";
  m3u8 += `#EXT-X-MEDIA-SEQUENCE:${timestamp}\n`;

  let cacheKey = "iptv200-index";
  let index = ku9.getCache(cacheKey);
  if (index == null) {
    index = Math.floor(Math.random() * (65 - 1 + 1)) + 1;
    ku9.setCache(cacheKey, index, 12000);
  }
  index = 59;

  for (let i = 0; i < 3; i++) {
    let url = `http://t${index}.iptv200.com/live/pool/${id}/litv-pc/${id}/${qlt}-${alt}-${t}-${timestamp}.tsv`;
    // 简单的 URL 有效性检查，这里可以进一步优化
    if (!url.match(/^http[s]?:\/\/.+\.tsv$/)) {
      continue;
    }
    m3u8 += "#EXTINF:4,\n";
    m3u8 += url + "\n";
    timestamp++;
    t += 4;
  }

  return JSON.stringify({
    m3u8: m3u8,
    headers: { referer: "https://m2.iptv807.com/" },
  });
}