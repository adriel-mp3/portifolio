export function activeMenuMobile() {
  const btnMobile = document.getElementById('btn-mobile');
  const nav = document.querySelector('.nav-content');
  const hamburguerIcon = document.getElementById('hamburguer');

  function toggleMenu(event) {  
    event.preventDefault();
    
    hamburguerIcon.classList.toggle('active');
    nav.classList.toggle('active');

    return updateAriaStatus(event.currentTarget);
  }

  function updateAriaStatus(element) {
    const isMenuActive = nav.classList.contains('active');
    element.setAttribute('aria-expanded', isMenuActive);

    return isMenuActive 
    ? element.setAttribute('aria-label', 'Fechar menu') 
    : element.setAttribute('aria-label', 'Abrir menu');
  }

  const events = ['click','touchstart'];
  
  events.forEach(event => btnMobile.addEventListener(event, toggleMenu));
}




