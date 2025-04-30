// Menu dropdown
const departmentsToggle = document.querySelector('.departments-toggle');
const departmentsMenu = document.querySelector('.departments-menu');
let isMenuOpen = false;

departmentsToggle.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  isMenuOpen = !isMenuOpen;
  departmentsMenu.classList.toggle('show');
  
  // Atualiza o ícone
  const chevronIcon = departmentsToggle.querySelector('.fa-chevron-down');
  if (isMenuOpen) {
    chevronIcon.style.transform = 'rotate(180deg)';
  } else {
    chevronIcon.style.transform = 'rotate(0deg)';
  }
});

// Fechar o menu quando clicar fora
document.addEventListener('click', (e) => {
  if (!departmentsToggle.contains(e.target) && !departmentsMenu.contains(e.target)) {
    departmentsMenu.classList.remove('show');
    isMenuOpen = false;
    const chevronIcon = departmentsToggle.querySelector('.fa-chevron-down');
    chevronIcon.style.transform = 'rotate(0deg)';
  }
});

// Fechar o menu quando rolar a página
window.addEventListener('scroll', () => {
  departmentsMenu.classList.remove('show');
  isMenuOpen = false;
  const chevronIcon = departmentsToggle.querySelector('.fa-chevron-down');
  chevronIcon.style.transform = 'rotate(0deg)';
}); 