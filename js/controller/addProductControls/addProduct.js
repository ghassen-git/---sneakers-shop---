const add = document.querySelector(".addProducts");
const card = document.querySelector(".card");

let x = 0;
export function addProduct() {
  add.addEventListener("click", function (e) {
    let num = document.querySelector(".number").textContent;
    console.log(x);
    const numProd = document.querySelector(".numProd");
    document.querySelector(".number").textContent = 0;
    if (num > 0) {
      if (numProd) {
        numProd.remove();
      }
      const cardContent = document.querySelector(".card-content");
      x += parseInt(num);

      const html = `<div class="numProd"><span>${x}</span></div>`;
      card.insertAdjacentHTML("afterbegin", html);
      cardContent.classList.add("content-active");
      const str = `<div>
              <div class="img_prod">
                <img src="images/image-product-1-thumbnail.jpg" alt="" />
              </div>
              <div class="product-description">
                <p>Fall Limited Edition Sneakers</p>
                <div>
                  <p>$125.00 x ${x}</p>
                  <span class="total-price">$${x * 125}.00</span>
                </div>
              </div>
              <svg
              class="del"
                width="14"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a"
                  />
                </defs>
                <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
              </svg>
            </div>
            <button class="btn-checkout">Checkout</button>
          </div>`;
      cardContent.innerHTML = str;
      const deleteModal = document.querySelector(".del");
      if (deleteModal) {
        deleteModal.addEventListener("click", function (e) {
          num = 0;
          x = 0;
          cardContent.classList.remove("content-active");
          cardContent.innerHTML = " <p>Your cart is empty.</p>";
          cardContent.style.padding = "9rem 13rem";
          const numProd = document.querySelector(".numProd");
          numProd.remove();
        });
      }
    }
  });
}

/*


 


*/
