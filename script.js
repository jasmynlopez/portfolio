setTimeout(() => {
    document.querySelector('.auto-type').style.visibility = 'visible'; // Show the text container
    var typed = new Typed(".auto-type", {
        strings: [
            "print(&quot;Hello, World! I'm Jasmyn&quot;)",  
            "cout &lt;&lt; &quot;Hello, World! I'm Jasmyn.&quot;\;", 
            "printf(&quot;Hello, World! I'm Jasmyn.&quot;)", 
            "console.log(&quot;Hello, World! I'm Jasmyn.&quot;)",
            "cat(&quot;Hello, World! I'm Jasmyn.&quot\;)", 
            "System.out.println(&quot;Hello, World! I'm Jasmyn.&quot;)"
        ],
        typeSpeed: 100, 
        backSpeed: 75,
        loop: true
    });
}, 6000);

document.addEventListener('DOMContentLoaded', (event) => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    
    // Get all elements with the 'initial-hide' class
    const hiddenSections = document.querySelectorAll('.hide-start');
    
    // After 8 seconds...
    setTimeout(() => {
      // Enable scrolling
      document.body.style.overflow = 'auto';
      
      // Show all initially hidden sections
      hiddenSections.forEach(section => {
        section.style.display = 'block';
        section.classList.add('.arrive')
      });

    }, 8000);
  });

let menuIcon = document.querySelector('#menu-icon'); 
let navBar = document.querySelector('.navbar'); 

let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => { 
  sections.forEach(sec => {
    let top = window.scrollY; 
    let offset = sec.offsetTop - 150; 
    let height = sec.offsetHeight; 
    let id = sec.getAttribute('id'); 

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active'); 
         document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}
function adjustNavBar() {
    if (window.innerWidth > 1050) {
      if (getComputedStyle(menuIcon).display === 'block') {
        menuIcon.style.display = 'none';
      } 
      else {
        menuIcon.style.display = '';
      }
    } 
}
adjustNavBar(); 

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    navBar.classList.add('fast');
    menuIcon.classList.add('fast');
    navBar.classList.remove('slow');
    menuIcon.classList.remove('slow');
  }, 8900);
});


window.addEventListener('resize', adjustNavBar);


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x'); 
  navBar.classList.toggle('active');
  navBar.classList.remove('slow'); 
  navBar.classList.add('fast');
}


var items = document.querySelectorAll(".ed li, .view");

function isElementInViewport(el){
    var rect = el.getBoundingClientRect();
   return (
    rect.top >= 75 && 
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
}

function callbackFunc() {
    for(var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])){
            if (!items[i].classList.contains("in-view")){
                items[i].classList.add("in-view");
            }
        } else if (items[i].classList.contains("in-view")){
            items[i].classList.remove("in-view");
        }
    }
}

window .addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

// NEW PROJECT 
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  const images = [
    { src: '../imgs/malaria detection.png', title: 'Automated Malaria Detection', description: 'Image processing pipeline for quantification and stage categorization of P. vivax from blood smears.', link: 'https://github.com/jasmynlopez/Malaria-Detection-from-Blood-Smears' },
    { src: '../imgs/heart tomography.png', title: 'Heart Abnormality Diagnosis', description: 'Diagnose heart abnormalities based on tomography using Logistic Regression', link: 'https://github.com/jasmynlopez/Heart-Abnorbmality-Diagnosis' },
    { src: '../imgs/error analysis.png', title: 'Error Analysis in Digital Communication Systems', description: 'Exploring the bit error rate of filtering out different types of noise in both simulated and physical channels.', link: 'https://github.com/jasmynlopez/Digital-Communication-Error-Analysis' },
    { src: '../imgs/Netflix Predictor.png', title: 'Love Actually Predictor', description: 'Given Netflix ratings, predict the probability that a user rates Love Actually 5 stars using Naive Bayes.', link: 'https://github.com/jasmynlopez/Naive-Bayes-Movie-Predictor' },
    { src: '../imgs/calculator.png', title: 'Calculator Website', description: ' Aesthetic calculator with light and dark modes.', link: 'https://github.com/jasmynlopez/Calculator' }
  ];

  let currentIndex = 0;
  let intervalId;

  function createCards() {
  images.forEach((img, index) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    if (index === 0) projectCard.classList.add('active'); // Only the first card is active initially

    projectCard.innerHTML = `
      <div class="project-inner">
        <div class="project-front">
          <img src="${img.src}" alt="${img.title}">
          <h2>${img.title}</h2>
        </div>
        <div class="project-back">
          <p>${img.description}</p>
          <a href="${img.link}" target="_blank">View on GitHub</a>
        </div>
      </div>
    `;

    carousel.appendChild(projectCard);
  });
}

  function showCard(index) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % images.length;
    showCard(currentIndex);
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showCard(currentIndex);
  }

  function startCarousel() {
    intervalId = setInterval(nextCard, 2900);
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  createCards();
  startCarousel();

  carousel.addEventListener('mouseenter', stopCarousel);
  carousel.addEventListener('mouseleave', startCarousel);

  leftArrow.addEventListener('click', () => {
    prevCard();
    stopCarousel();
    startCarousel();
  });

  rightArrow.addEventListener('click', () => {
    nextCard();
    stopCarousel();
    startCarousel();
  });
});


// NEW PROJECT



const scriptURL = "https://script.google.com/macros/s/AKfycbyuUN-ZVhnZBIxwXLBiU0extg6Rq2Sme4kPJef8Dr8tgb2rPX_1IsU1IslzedHd0w-j/exec"
const form = document.forms['contact-form']
const modal = document.getElementById("successModal");
const closeBtn = document.getElementsByClassName("close-btn")[0];

form.addEventListener('submit', e => {
    e.preventDefault(); 
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response =>  {
        form.reset();
        modal.style.display = "block";
    })
    .catch(error => console.error('Error!', error.message))
})

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
