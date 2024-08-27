let scrollTop = document.querySelector(".scrollTop");

window.onscroll = () => {
  /**
     * Se a rolagem vertical for maior que 200 pixels, o botão de scroll-top (scrollTop) é exibido (display: "block"), tornando-o visível ao adicionar a classe visible e removendo a classe hidden.

    Caso contrário, a classe hidden é adicionada (iniciando o fade-out) e a classe visible é removida, preparando o botão para desaparecer.
     *  */
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTop.style.display = "block";
    scrollTop.classList.add("visible");
    scrollTop.classList.remove("hidden");
  } else {
    scrollTop.classList.add("hidden");
    scrollTop.classList.remove("visible");

    // Define uma função para ocultar completamente após o fade-out(desaparecer esmaecidamente)
    setTimeout(() => {
      if (!scrollTop.classList.contains("visible")) {
        scrollTop.style.display = "none";
      }
    }, 2000); // Tempo de transição
  }
};

/*
 *Ao clicar no botão, a página rola suavemente até o topo (top: 0) usando o comportamento de rolagem suave (behavior: "smooth").
 */
scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const carousel = document.querySelector('.thumbnail-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  carousel.classList.add('active');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  carousel.classList.remove('active');
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -200, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 200, behavior: 'smooth' });
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; 
  carousel.scrollLeft = scrollLeft - walk;
});

// Função para atualizar a imagem no modal
const thumbnails = document.querySelectorAll('.thumbnail-carousel img');
const modalImage = document.getElementById('modalImage');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    const src = this.src;
    modalImage.src = src;
  });
});

