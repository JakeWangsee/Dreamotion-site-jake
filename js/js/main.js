// Inject header and footer
fetch('header.html').then(res => res.text()).then(data => {
  document.getElementById('site-header').innerHTML = data;
});
fetch('footer.html').then(res => res.text()).then(data => {
  document.getElementById('site-footer').innerHTML = data;
});
