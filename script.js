const buttons = document.querySelectorAll("[data-carosel-button")

buttons.array.forEach( button => {
    button.addEventListener("click", () =>{
        const offset = button.dataset.caroselButton === "next" ? 1 : -1
        const slides = button
        .closest("[data-carosel]")
        .querySelector('[data-slides')
        
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.childern].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.childern.lenght -1
        if (newIndex >= slides.childern.lenght) newIndex = 0
        
        slides.childern[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
});