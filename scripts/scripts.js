const modal = document.getElementById("modal");
const menu = document.getElementById("menu");
const cartButton = document.getElementById("cart-button");
const cartAdd = document.querySelectorAll("svg")
const cartAddTwo = document.querySelectorAll("path")
const cartTotal = document.getElementById("cart-total");
const checkout = document.getElementById("checkout-btn");
const closeModal = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const adressInput = document.getElementById("address");
const adressWarn = document.getElementById("warn");
const TheItens = document.getElementById("cart-items")

let cartItems = [];

//open modal when menu button is clicked
cartButton.addEventListener("click", () => {
    modal.style.display = "flex";
})

//close modal when close button is clicked
modal.addEventListener("click", (event) => {
  if (event.target === modal ){
    modal.style.display = "none";
  }
})

//close modal when button "fechar" is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
})

//logic to add items to cart 

function addTocart(price,name){
   const verifyItem = cartItems.find(item => item.name === name)

   if (verifyItem) {
      verifyItem.quantity += 1;
   }else {
      cartItems.push({
        name,
        price,
        quantity: 1
     })
   }
   parseInt(price);

     
    updateCartModal();
}


cartAdd.forEach(svg => {
    svg.addEventListener("click", function getInfos() {
        const price = parseInt(svg.getAttribute("data-price"));
        const name = svg.getAttribute("data-name");

       addTocart(price,name);
    });
});

cartAddTwo.forEach(path => {
    path.addEventListener("click", () => {
       getInfos()
    });
});

//logica to update cart total and items
function updateCartModal() {
    TheItens.innerHTML = ``;
     let  total = 0

    cartItems.forEach(item => {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col", "md:flex-row", );
      


      cartItemElement.innerHTML = `
       <div>
          <div>
            <p className="font-medium">${item.name}</p>
            <p className="font-medium mt-2">  ${item.quantity}</p>
             <p className="font-bold mt-2">R$ ${item.price}</p>
          </div>
          <div>
           <button className="bg-red-700 text-white p-2 rounded-md hover:bg-red-900">remove </button>
          </div>
       </div>
      
      `
       
     total += item.price * item.quantity;
    

      TheItens.appendChild(cartItemElement)
    },
    
  )

   

   cartTotal.textContent = total
    
}

//calculate total price
