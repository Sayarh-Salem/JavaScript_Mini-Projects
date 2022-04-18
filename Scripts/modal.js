const modalBtn = document.querySelector(".btn-modal");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function m1() {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function m2() {
  modal.classList.remove("open-modal");
});
