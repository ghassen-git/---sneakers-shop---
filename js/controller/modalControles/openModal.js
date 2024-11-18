const cartBtn = document.querySelector(".card");
const cart = document.querySelector(".cardPopUp");

const body = document.querySelector("body");

export function openModal() {
  cartBtn.addEventListener("click", function (e) {
    cart.classList.remove("cardPopUp_active");
    const cardContent = document.querySelector(".content-active");
    if (cardContent) {
      cardContent.style.padding = "2rem";
    }
  });
  body.addEventListener("click", function (e) {
    if (e.target.closest(".open") == null) {
      cart.classList.add("cardPopUp_active");
    }
  });
}
