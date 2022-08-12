const openMenu = document.querySelector(".navOpen")
const closeMenu = document.querySelector(".navClose")
const navMenu = document.querySelector(".navLinks")
const logo1 = document.querySelector(".logo1")
const faqs = document.querySelectorAll(".faq")


openMenu.addEventListener("click",function(){
    navMenu.style.top = "0"
    openMenu.style.display = "none"
    logo1.style.display = "none"

})

closeMenu.addEventListener("click", function(){
    navMenu.style.top = "-100%"
    openMenu.style.display = "block"
    logo1.style.display = "block"
})

faqs.forEach(function(faq){
    faq.addEventListener('click', function(){
        faq.classList.toggle("showAns")
    })
})