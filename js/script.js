

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