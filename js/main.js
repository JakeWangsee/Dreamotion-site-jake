
// 动态注入 header 和 footer
document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(res => res.text())
    .then(data => document.querySelector('header').innerHTML = data);

  fetch('footer.html')
    .then(res => res.text())
    .then(data => document.querySelector('footer').innerHTML = data);
});
