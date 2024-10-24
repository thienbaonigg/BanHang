'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.createElement("div");
  banner.classList.add("promo-banner");
  banner.textContent = "Chào mừng đến với Anon! Khám phá các ưu đãi tuyệt vời ngay hôm nay.";

  document.body.appendChild(banner);

  // Hiệu ứng hoạt hình cho banner
  setTimeout(() => {
    banner.style.opacity = 1;
    banner.style.transform = "translateY(0)";
  }, 500);

  // Sự kiện để đóng banner
  banner.addEventListener("click", () => {
    banner.style.opacity = 0;
    setTimeout(() => banner.remove(), 600);
  });
});

// CSS cho promo banner
const style = document.createElement("style");
style.textContent = `
  .promo-banner {
    position: fixed;
    top: -50px;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    background-color: #ff5722;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    cursor: pointer;
    transition: all 0.6s ease;
    opacity: 0;
  }
`;
document.head.appendChild(style);