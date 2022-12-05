const menuBtn = document.querySelector('.burger');
const menu2 = document.querySelector('#menu2');
let menuOpen = false;
let menu2Open = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        menu2.classList.add('open');
        menu2Open = true;
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menu2.classList.remove('open');
        menu2Open = false;
    }
});