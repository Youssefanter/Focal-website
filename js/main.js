const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      const paragraphs = document.querySelectorAll(".paragraph");
      paragraphs.forEach((paragraph) => {
        paragraph.classList.add("hidden"); // Hide all paragraphs
        paragraph.classList.remove("slide-up"); // Reset animation
      });
      const activeSlide = swiper.slides[swiper.activeIndex];
      const paragraph = activeSlide.querySelectorAll(".paragraph");
      paragraph.forEach((para) => {
        para.classList.remove("hidden");
        para.classList.add("slide-up");
      });
    },
  },
});

window.addEventListener("load", function () {
  const activeSlide = swiper.slides[swiper.activeIndex];
  const paragraphs = activeSlide.querySelectorAll(".paragraph");
  console.log(paragraphs);
  paragraphs.forEach((paragraph) => {
    paragraph.classList.remove("hidden");
    paragraph.classList.add("slide-up");
  });
  // if (paragraph) {
  //   paragraph.classList.remove("hidden");
  //   paragraph.classList.add("slide-up");
  // }
});
