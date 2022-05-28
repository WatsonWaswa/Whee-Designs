
document.onclick = function(e){
    if( e.target.id !== 'header' && e.target.id !== 'toggle-menu' && e.target.id !== 'close-menu' && e.target.id !== 'nav-menu'  )
toggle.classList.remove('active');
toggle.classList.remove('active');
}


//Side nav

const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('toggle-menu'),
closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

 