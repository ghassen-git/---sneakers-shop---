const plusMinus = document.querySelector(".plusMinus");

export function ProductNumber() {
  plusMinus.addEventListener("click", function (e) {
    let num = document.querySelector(".number").textContent;
    if (e.target.classList.contains("plus")) {
      num++;
      e.target.closest(".plusMinus").querySelector(".number").textContent = num;
    } else if (e.target.classList.contains("minus") && num > 0) {
      num--;
      e.target.closest(".plusMinus").querySelector(".number").textContent = num;
    }
  });
}
