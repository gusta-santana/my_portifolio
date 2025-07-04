// Obtém o link e a seção
const exploreLink = document.getElementById('exploreLink');
const exploreSection = document.getElementById('explore');

// Quando o link "EXPLORE" for clicado, a seção será exibida e a rolagem será feita
exploreLink.addEventListener('click', function(e) {
    e.preventDefault();  // Impede o comportamento padrão do link (reload)
    
    
        // Rolagem suave até a seção
        exploreSection.scrollIntoView({ behavior: 'smooth' });
});

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)