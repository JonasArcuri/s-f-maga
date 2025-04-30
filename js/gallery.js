// Galeria de imagens
const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnail-images img');
const zoomOverlay = document.querySelector('.zoom-overlay');
const zoomImage = zoomOverlay.querySelector('img');
let currentIndex = 0;
const autoChangeTime = 10000; // 10 segundos

// Função para trocar imagem
function changeImage(index) {
  thumbnails.forEach(t => t.classList.remove('active'));
  thumbnails[index].classList.add('active');
  
  mainImage.style.opacity = '0';
  setTimeout(() => {
    mainImage.src = thumbnails[index].src;
    mainImage.style.opacity = '1';
  }, 200);
}

// Troca automática de imagens
function autoChangeImage() {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  changeImage(currentIndex);
}

// Iniciar troca automática
let autoChangeInterval = setInterval(autoChangeImage, autoChangeTime);

// Parar troca automática ao interagir com as miniaturas
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    clearInterval(autoChangeInterval);
    currentIndex = index;
    changeImage(currentIndex);
    
    // Reiniciar troca automática após 5 segundos de inatividade
    setTimeout(() => {
      autoChangeInterval = setInterval(autoChangeImage, autoChangeTime);
    }, 5000);
  });
});

// Funcionalidade de zoom
mainImage.addEventListener('click', () => {
  zoomImage.src = mainImage.src;
  zoomOverlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

zoomOverlay.addEventListener('click', () => {
  zoomOverlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Pausar troca automática quando o mouse está sobre a galeria
const gallery = document.querySelector('.product-gallery');
gallery.addEventListener('mouseenter', () => {
  clearInterval(autoChangeInterval);
});

gallery.addEventListener('mouseleave', () => {
  autoChangeInterval = setInterval(autoChangeImage, autoChangeTime);
});

// Ativar primeira miniatura por padrão
if (thumbnails.length > 0) {
  thumbnails[0].classList.add('active');
} 