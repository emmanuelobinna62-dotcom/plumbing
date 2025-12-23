import './style.css'



 const menu = document.querySelector('.menu-links');
 const hamburger = document.querySelector('.hamburger');
 const links = document.querySelectorAll('.links');
 const body = document.querySelector('.body')
 



 function toggleMenu() {
  menu.classList.toggle('hidden');

  hamburger.classList.toggle ('fa-bars');
  hamburger.classList.toggle ('fa-times');
  
}

function closeMenu() {
  menu.classList.add('hidden');

  hamburger.classList.toggle ('fa-bars');
  hamburger.classList.toggle ('fa-times');
  
}



hamburger.addEventListener('click',toggleMenu)


links.forEach (link => {
  link.addEventListener ('click',closeMenu);
})

 


