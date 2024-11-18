const imgsContainer = document.querySelectorAll(".small-imgs");
const bigImg = document.querySelector(".bigImg");
const bigImg2 = document.querySelector(".bigImg2");

export function selectImg() {
  imgsContainer.forEach(function (img) {
    img.addEventListener("click", function (e) {
      const active = document.querySelector(".small-imgs-active");
      const active2 = document.querySelector(".div_active");

      if (active && active2) {
        active.classList.remove("small-imgs-active");
        active2.classList.remove("div_active");
      }
      if (e.target.classList.contains("smallImg")) {
        if (e.target.closest(".black-bg")) {
          bigImg2.src = e.target.getAttribute("src-big");
        } else {
          bigImg.src = e.target.getAttribute("src-big");
        }
        e.target.classList.add("small-imgs-active");
        e.target.parentElement.classList.add("div_active");
      }
    });
  });
}
