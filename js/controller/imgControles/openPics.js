const bigImg = document.querySelector(".bigImg");
const container = document.querySelector(".black-bg");
const closeImg = document.querySelector(".close");
const body = document.querySelector("body");
const Open = function () {
  container.classList.add("open-black-bg");
};
const close = function () {
  container.classList.remove("open-black-bg");
};
export function OpenImg() {
  body.addEventListener("click", function (e) {
    if (e.target.classList.contains("black-bg")) {
      container.classList.remove("open-black-bg");
    }
  });
  bigImg.addEventListener("click", Open);
  closeImg.addEventListener("click", close);
}
