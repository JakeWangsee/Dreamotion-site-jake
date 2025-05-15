
// FAQ only one open
document.addEventListener("DOMContentLoaded", function () {
  const detailsList = document.querySelectorAll(".faq details");
  detailsList.forEach((detail) => {
    detail.addEventListener("toggle", function () {
      if (detail.open) {
        detailsList.forEach((d) => {
          if (d !== detail) d.removeAttribute("open");
        });
      }
    });
  });
});

// Lightbox logic
document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll(".responsive-img");
  imgs.forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      const modal = document.createElement("div");
      modal.className = "lightbox-modal";
      modal.innerHTML = `<div class="lightbox-bg"></div><img src="${img.src}" class="lightbox-img" />`;
      document.body.appendChild(modal);
      modal.addEventListener("click", () => modal.remove());
    });
  });
});
