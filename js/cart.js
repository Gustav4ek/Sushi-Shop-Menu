const cardInBasket = document.querySelector(".cart-wrapper")


window.addEventListener("click", function (event) {
    if(event.target.hasAttribute("data-cart")){
        const card = event.target.closest(".card")
        
        cardInfo = {
            id: card.dataset.id,
            img: card.querySelector(".product-img").getAttribute("src"),
            title: card.querySelector(".item-title").innerText,
            amount: card.querySelector(".text-muted").innerText,
            counter: card.querySelector(".items__current").innerText,
            weight: card.querySelector(".price__weight").innerText,
            price: card.querySelector(".price__currency").innerText
        }
        
        
    
        const RepeatCard = cardInBasket.querySelector(`[data-id="${cardInfo.id}"]`);
        
        if (RepeatCard){
            const CounterRepeatElement = RepeatCard.querySelector("[data-counter]");
            CounterRepeatElement.innerText = parseInt(CounterRepeatElement.innerText) + parseInt(cardInfo.counter)
        } else {
            const cardInBasketHTML = `<div class="cart-item" data-id="${cardInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${cardInfo.img}" alt="">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${cardInfo.title}</div>
                <div class="cart-item__weight">${cardInfo.amount} / ${cardInfo.weight}</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper" data-small="">
                        <div class="items__control" data-action="minus" onclick="" style="cursor:pointer">-</div>
                        <div class="items__current" data-counter="">${cardInfo.counter}</div>
                        <div class="items__control" data-action="plus" onclick="" style="cursor:pointer">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${cardInfo.price}</div>
                    </div>`
            cardInBasket.insertAdjacentHTML("beforeend", cardInBasketHTML)
        }
        
        card.querySelector(".items__current").innerText = "1"
        
        
        toggleCardStatus();
        checkPrice();
     }

})


