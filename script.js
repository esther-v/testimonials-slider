//target DOM elements
const buttons = document.querySelectorAll('.next, .prev')
const sliders = document.querySelectorAll('.slider')

//toggle on buttons to switch from one to another person
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        sliders.forEach((slider) => {
            slider.classList.toggle("hide")
        })
    })
})
