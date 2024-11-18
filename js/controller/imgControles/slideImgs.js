const btns = document.querySelectorAll(".icons");
const bigimg = document.querySelector(".bigImg2");
const imgsContainer = document.querySelectorAll(".small-imgs");
let id = bigimg.getAttribute("itemId");
export function slidePics() {
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (e.target.classList.contains("left")) {
        if (id > 1) {
          id--;
          bigimg.src = `images/image-product-${id}.jpg`;
          console.log(id);
        } else {
          id = 4;
          bigimg.src = `images/image-product-${id}.jpg`;
          console.log(id);
        }
      } else if (e.target.classList.contains("right")) {
        if (id < 4) {
          id++;
          bigimg.src = `images/image-product-${id}.jpg`;
          console.log(id);
        } else {
          id = 1;
          bigimg.src = `images/image-product-${id}.jpg`;
          console.log(id);
        }
      }
    });
  });
}
