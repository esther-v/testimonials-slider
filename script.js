//target DOM elements
const prev = document.querySelectorAll('.prev')
const next = document.querySelectorAll('.next')
const sliders = document.querySelectorAll('.slider')


prev.forEach((previous) => {
    previous.addEventListener('click', () => {
        sliders.forEach((slider) => {
            slider.classList.toggle("hide")
        })
    })
})

next.forEach((nextBtn) => {
    nextBtn.addEventListener('click', () => {
        sliders.forEach((slider) => {
            slider.classList.toggle("hide")
        })
    })
})
