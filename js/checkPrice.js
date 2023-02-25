
 function checkPrice() {
    const TotalPrice = document.querySelector(".total-price")
    const Basket = document.querySelector(".cart-wrapper")
    const TotalBasketCarts = Basket.querySelectorAll(".price__currency")
    const DeliveryPrice = document.querySelector(".delivery-cost")

    let CounterSum = 0;
    TotalBasketCarts.forEach(function (card) {
        const CardCounter = card.closest(".cart-item").querySelector("[data-counter]")
        
        CounterSum += (parseInt(card.innerText) * parseInt(CardCounter.innerText))
        
    })
        
        TotalPrice.innerText = CounterSum;

        if (CounterSum >= 600 || CounterSum == 0) {
            DeliveryPrice.classList.add("free");
            DeliveryPrice.innerText = "бесплатно"
        } else {
            DeliveryPrice.classList.remove("free");
            DeliveryPrice.innerText = "250 ₽";
        }
} 