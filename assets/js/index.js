const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar--menu-mobile')
burger.addEventListener('click', function(e){
    e.stopPropagation();
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})
document.addEventListener('click', function(e){
    if (!menu.contains(e.target)){
        burger.classList.remove('active')
        menu.classList.remove('active');
    } 
})

window.addEventListener("scroll", dealWithScrolling, false);
function dealWithScrolling(e) {
    let y = window.scrollY
    if(y > 100){
        document.querySelector('.navbar').classList.add('fixed') 
    } else {
        document.querySelector('.navbar').classList.remove('fixed')
    }
      
}


const langList = document.querySelector('.lang--dropdown-list')
const lang = document.querySelector('.lang')
lang.addEventListener("click", () => {
  langList.classList.toggle("show");
  lang.classList.toggle("show");
}, {passive: true});