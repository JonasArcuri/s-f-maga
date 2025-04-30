// Modal de compartilhamento
const shareBtn = document.querySelector('.share-buttons .share-btn');
const shareModal = document.createElement('div');
shareModal.className = 'share-modal';
shareModal.innerHTML = `
  <div class="share-modal-content">
    <h3>Compartilhar</h3>
    <div class="share-buttons">
      <a href="#" class="share-option whatsapp" target="_blank">
        <i class="fab fa-whatsapp"></i>
        <span>WhatsApp</span>
      </a>
      <a href="#" class="share-option facebook" target="_blank">
        <i class="fab fa-facebook"></i>
        <span>Facebook</span>
      </a>
      <a href="#" class="share-option twitter" target="_blank">
        <i class="fab fa-twitter"></i>
        <span>Twitter</span>
      </a>
      <a href="#" class="share-option email">
        <i class="fas fa-envelope"></i>
        <span>E-mail</span>
      </a>
    </div>
    <button class="close-share-modal">
      <i class="fas fa-times"></i>
    </button>
  </div>
`;

// Adicionar o modal ao body
document.body.appendChild(shareModal);

// Função para gerar links de compartilhamento
function generateShareLinks() {
  const productTitle = "Console PlayStation 5 Slim Sony, SSD 1TB, Edição Digital"; // Título fixo para teste
  const productUrl = window.location.href;
  const shareText = `Confira este produto: ${productTitle}`;

  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + productUrl)}`;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(productUrl)}`;
  const emailLink = `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(productUrl)}`;

  document.querySelector('.share-option.whatsapp').href = whatsappLink;
  document.querySelector('.share-option.facebook').href = facebookLink;
  document.querySelector('.share-option.twitter').href = twitterLink;
  document.querySelector('.share-option.email').href = emailLink;
}

// Abrir modal de compartilhamento
shareBtn.addEventListener('click', (e) => {
  e.preventDefault();
  generateShareLinks();
  shareModal.classList.add('show');
  document.body.style.overflow = 'hidden';
});

// Fechar modal
const closeBtn = shareModal.querySelector('.close-share-modal');
closeBtn.addEventListener('click', () => {
  shareModal.classList.remove('show');
  document.body.style.overflow = 'auto';
});

// Fechar modal ao clicar fora
shareModal.addEventListener('click', (e) => {
  if (e.target === shareModal) {
    shareModal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}); 