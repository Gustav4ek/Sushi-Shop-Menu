const EmptyBasket = document.querySelector("[role='alert']")
const CheckEmptyList = document.querySelector(".cart-wrapper");
const OrderForm = document.querySelector("#order-form")

function toggleCardStatus() {
    if (CheckEmptyList.children.length === 0) {
        EmptyBasket.classList.remove("none");
        OrderForm.classList.add("none");
    }
    if (CheckEmptyList.children.length >= 1) {
        EmptyBasket.classList.add("none");
        OrderForm.classList.remove("none");
    } 
}

