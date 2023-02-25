
window.addEventListener("click", function (event) {
    const parentElement = event.target.parentElement
    const parentMinus = parentElement.querySelector("[data-action='minus']")
    const parentPlus = parentElement.querySelector("[data-action='plus']")
    const parentCounter = parentElement.querySelector("[data-counter]")


    if (event.target == parentMinus){
        if (parentElement.hasAttribute("data-small") && parseInt(parentCounter.innerText) === 1){
            parentElement.closest(".cart-item").remove()
            checkPrice();
            toggleCardStatus();
            
        } else if (parseInt(parentCounter.innerText) === 1) return
        parentCounter.innerText --
    }
    if (event.target == parentPlus)
    parentCounter.innerText ++
    
    if (event.target.hasAttribute("data-action") && event.target.closest(".cart-wrapper"))  checkPrice(); 

  
    
})