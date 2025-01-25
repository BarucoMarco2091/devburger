AOS.init();

const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

let cart = [];

// Abrir modal

cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex";
});

// Fechar o modal quando clicar fora 

cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal) {
        cartModal.style.display = "none";
    };
});

// Fechar o modal quando clicar no botão fechar

closeModalBtn.addEventListener("click", ()=> {
    cartModal.style.display = "none";
});

// Adicionar itens no carrinho

menu.addEventListener("click", function(event) {
    let parentButton = event.target.closest(".add-to-cart-btn");
    
    if(parentButton) {
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));
        
        // Adicionar ao carrinho chamando a função
        addToCart(name, price);
    }
});

// Função para adicionar ao carrinho

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name)

    if(existingItem) {
        // Se o item já existe, aumenta apenas a quantidade + 1
        existingItem.quantity += 1;
        return;
    }

    cart.push({
        name,
        price,
        quantity: 1,
    });
};