// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
// Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

// Cart Working JS
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

// making function
function ready() {
    // Reomve Items From Cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // Quantify Charges
    var quantifyInputs = document.getElementsByClassName('cart-quantify');
    for (var i = 0; i < quantifyInputs.length; i++) {
        var input = quantifyInputs[i];
        input.addEventListener("change", quantifyChanged);
    }
    // Add to Cart
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
}

// Reomve Items From Cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// Quantify Change
function quantifyChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

// Add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

// Buy button work
document.getElementsByClassName('btn-buy')[0].addEventListener("click", buyButtonClicked);

// Buy button
function buyButtonClicked() {
    alert('Seu pedido está feito :)');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++) {
      if (cartItemsNames[i].innerText === title) {
        alert("Você já adicionou esse item ao carrinho");
        return;
      }
    }
    var cartBoxContent = `
      <img src="${productImg}" alt="" class="cart-img">
      <div class="detail-box">
          <div class="cart-product-title">${title}</div>
          <div class="cart-price">${price}</div>
          <input type="number" value="1" class="cart-quantify">
      </div>
      <!-- remove to cart -->
      <i class="bx bxs-trash-alt cart-remove"></i>
    `;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantify')[0].addEventListener('change', quantifyChanged);
  }
  
  var title = "Camisa Social";
  var price = "$25.04";
  var productImg = "./img/camisa-social-slim-fit-floral-estilosa-masculina-manga-longa.jpg";
  
  addProductToCart(title, price, productImg);
  
  function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName("cart-price")[0];
      var quantifyElement = cartBox.getElementsByClassName("cart-quantify")[0];
  
      if (!priceElement || !quantifyElement) {
        // verifica se os elementos existem
        continue; // pula para a próxima iteração do loop
      }
  
      var price = parseFloat(priceElement.innerText.replace("$", ""));
      var quantify = parseFloat(quantifyElement.value);
  
      if (isNaN(price) || isNaN(quantify)) {
        // verifica se os valores obtidos são válidos
        continue; // pula para a próxima iteração do loop
      }
  
      total = total + price * quantify;
    }
  
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total-price')[0].innerText = "$" + total;
  }
  
      // Quantify Change
function quantifyChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateTotal();
  }
  
  // Add to cart
  function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
  }
  
  // Add event listener to quantity inputs
  var quantifyInputs = document.getElementsByClassName('cart-quantify');
  for (var i = 0; i < quantifyInputs.length; i++) {
    var input = quantifyInputs[i];
    input.addEventListener('change', quantifyChanged);
  }
  

      
