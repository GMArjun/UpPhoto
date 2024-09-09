// Enable Tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// Initialize Category Swiper
// Initialize Category Swiper
const categorySwiper = new Swiper(".category-swiper .swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next-category",
    prevEl: ".swiper-button-prev-category",
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

// Initialize Popular Services Swiper
const popularServicesSwiper = new Swiper(".popular-services-swiper .swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next-external",
    prevEl: ".swiper-button-prev-external",
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// Initialize Customer Feedback Swiper
const customerFeedbackSwiper = new Swiper(".customer-feedback-swiper .swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next-feedback",
    prevEl: ".swiper-button-prev-feedback",
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const techListSwiper = new Swiper(".tech-list-swiper .swiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next-external",
    prevEl: ".swiper-button-prev-external",
  },
  loop: false, // Enable continuous looping
  breakpoints: {
    400: {
      slidesPerView: 1.5, // Adjust for smaller screens
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2.5, // Adjust for small tablets
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5, // Adjust for medium tablets
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4.5, // Desired setting for larger screens
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4.5, // Ensure it stays 4.5 on even larger screens
      spaceBetween: 24,
    },
  },
});

$('input[name="language"]').on("change", function () {
  const isArabic = $(this).val() === "arabic";
  const direction = isArabic ? "rtl" : "ltr";
  const addStylesheet = isArabic
    ? "bootstrap.rtl.min.css"
    : "bootstrap.min.css";
  const removeStylesheet = isArabic
    ? "bootstrap.min.css"
    : "bootstrap.rtl.min.css";

  $("html").attr("dir", direction);
  const newStylesheet = $(
    `<link rel="stylesheet" href="./assets/style/${addStylesheet}">`
  );
  $("head").prepend(newStylesheet);
  $(`link[href="./assets/style/${removeStylesheet}"]`).remove();
});
