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
    if(y > 0){
        document.querySelector('.navbar').classList.add('fixed') 
    } else {
        document.querySelector('.navbar').classList.remove('fixed')
    }
      
}