// Importar todos os scripts
import './menu.js';
import './gallery.js';
import './carousel.js';
import './share.js';

// Mostrar/ocultar menu mobile
const toggle = document.getElementById('mobileToggle');
const categoryMenu = document.getElementById('categoryMenu');
toggle.addEventListener('click', () => {
  categoryMenu.classList.toggle('show');
}); 