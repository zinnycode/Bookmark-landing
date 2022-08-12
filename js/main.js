const openMenu = document.querySelector(".navOpen")
const closeMenu = document.querySelector(".navClose")
const navMenu = document.querySelector(".navLinks")
const logo1 = document.querySelector(".logo1")
const faqs = document.querySelectorAll(".faq")
const navlinks = document.querySelectorAll(".navLinks a")
const html = document.querySelector("html")

console.log(navlinks)


openMenu.addEventListener("click",function(){
    navMenu.style.top = "0"
    openMenu.style.display = "none"
    logo1.style.display = "none"
    html.style.overflowY = "hidden"

})

closeMenu.addEventListener("click", function(){
    navMenu.style.top = "-100%"
    openMenu.style.display = "block"
    logo1.style.display = "block"
    html.style.overflowY = "scroll"
})

faqs.forEach(function(faq){
    faq.addEventListener('click', function(){
        faq.classList.toggle("showAns")
    })
})

navlinks.forEach(function(navlink){
    navlink.addEventListener("click", function(){
        navMenu.style.top = "-100%"
        openMenu.style.display = "block"
        logo1.style.display = "block"
        html.style.overflowY = "scroll"
    })
})