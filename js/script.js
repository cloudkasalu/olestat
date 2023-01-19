

const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('#navbarNav');

navbarToggler.addEventListener('click', (e)=>{

      const value = navbarToggler.getAttribute('aria-expanded')

      if(value === 'false'){
        navbar.classList.add('navbar-show');
        navbarToggler.setAttribute('aria-expanded', "true");
        body.classList.add("modal-open");


      } else if (value === 'true'){
        navbar.classList.remove('navbar-show');
        navbarToggler.setAttribute('aria-expanded', "false");
        body.classList.remove("modal-open");
      }
         

})




document.addEventListener("click", function(e){
  console.log("active")
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  if(!isDropdownButton && e.target.closest('[data-dropdown]') != null ) return

 let currentDropdown;
 if(isDropdownButton){
  currentDropdown = e.target.closest('[data-dropdown]');
  currentDropdown.classList.toggle('active');
 }

 document.querySelectorAll('[data-dropdown].active').forEach(dropdown =>{
  if(dropdown == currentDropdown){
    return
  }else{
    dropdown.classList.remove('active')
  }
 })


})