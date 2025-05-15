
// 动态注入 header 和 footer
document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(res => res.text())
    .then(data => document.querySelector('header').innerHTML = data);

  fetch('footer.html')
    .then(res => res.text())
    .then(data => document.querySelector('footer').innerHTML = data);

  // 默认英文，不跳转；仅非英文语言跳转
  const lang = navigator.language || navigator.userLanguage;
  const langMap = {
    zh: 'index-cn.html',
    ja: 'index-jp.html',
    ar: 'index-ar.html',
    ru: 'index-ru.html'
  };
  const isRoot = location.pathname.endsWith('/') || location.pathname.endsWith('/index.html');
  if (isRoot && lang.startsWith('zh')) window.location.href = langMap.zh;
  else if (isRoot && lang.startsWith('ja')) window.location.href = langMap.ja;
  else if (isRoot && lang.startsWith('ar')) window.location.href = langMap.ar;
  else if (isRoot && lang.startsWith('ru')) window.location.href = langMap.ru;
});
