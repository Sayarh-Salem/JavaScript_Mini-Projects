const videoBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

videoBtn.addEventListener("click", function videoClick() {
  if (!videoBtn.classList.contains("slide")) {
    videoBtn.classList.add("slide");
    video.pause();
  } else {
    videoBtn.classList.remove("slide");
    video.play();
  }
});

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
