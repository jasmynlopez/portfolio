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
      });
    }, 8000);
  });


var items = document.querySelectorAll(".ed li");

function isElementInViewport(el){
    var rect = el.getBoundingClientRect();
   return (
    rect.top >= 100 && 
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
    const stickySection = document.querySelector('.sticky');
    const scrollSection = stickySection.querySelector('.scroll_section');
    const images = [
      { src: '../imgs/malaria detection.png', title: 'Automated Malaria Detection', description: 'Image processing pipeline for quantification and stage categorization of P. vivax from blood smears.', link: 'https://github.com/jasmynlopez/Malaria-Detection-from-Blood-Smears' },
      { src: '../imgs/heart tomography.png', title: 'Heart Abnormality Diagnosis', description: 'Diagnose heart abnormalities based on tomography using Logistic Regression', link: 'https://github.com/jasmynlopez/Heart-Abnorbmality-Diagnosis' },
      { src: '../imgs/error analysis.png', title: 'Error Analysis in Digital Communication Systems', description: 'Exploring the bit error rate of filtering out different types of noise in both simulated and physical channels.', link: 'https://github.com/jasmynlopez/Digital-Communication-Error-Analysis' },
      { src: '../imgs/Netflix Predictor.png', title: 'Love Actually Predictor', description: 'Given Netflix ratings, predict the probability that a user rates Love Actually 5 stars using Naive Bayes.', link: 'https://github.com/jasmynlopez/Naive-Bayes-Movie-Predictor' },
      { src: '../imgs/calculator.png', title: 'Calculator Website', description: ' Aesthetic calculator with light and dark modes.', link: 'https://github.com/jasmynlopez/Calculator' }
    ];
  
    images.forEach((img, index) => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
  
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
  
      scrollSection.appendChild(projectCard);
    });
  
    window.addEventListener('scroll', () => {
      transform();
    });
  

    function transform() {
        const stickyOffset = stickySection.parentElement.offsetTop;
        const maxScrollHeight = stickySection.parentElement.offsetHeight - window.innerHeight;
        const maxTransform = scrollSection.scrollWidth - window.innerWidth;
      
        let percentage = ((window.scrollY - stickyOffset) / maxScrollHeight) * 100;
        percentage = Math.min(Math.max(percentage, 0), 100);
      
        const translateX = (percentage / 100) * maxTransform;
        scrollSection.style.transform = `translateX(-${translateX}px) translateY(-50%)`;
      
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const centerX = window.innerWidth / 2;
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(centerX - cardCenterX);
          const maxDistance = window.innerWidth * 0.31;
          const centerY = window.innerHeight / 2;
          const cardCenterY = cardRect.top + cardRect.width / 2;
          const distY = Math.abs(centerY - cardCenterY);
          const maxDistanceY = window.innerWidth * 0.03;
      
          // Horizontal fading logic
          if (distance > maxDistance || distY > maxDistanceY) {
            card.style.opacity = 0;
            card.classList.remove('visible');
          } else {
            const opacity = 1 - (0.3 * (distance / maxDistance));
            card.style.opacity = opacity;
            card.classList.add('visible');
          }
        });
      }

    transform(); // Initial call to set positions and visibility

  });


  window.addEventListener('scroll', () => {
    const stickyElement = document.getElementById('.proj-heading');
    const stickyStop = 300; // Distance in pixels to stop being sticky
  
    if (window.scrollY > stickyStop) {
      stickyElement.classList.remove('sticky');
    } else {
      stickyElement.classList.add('sticky');
    }
  });
  

  window.addEventListener('scroll', function() {
    var projHeading = document.getElementById('projects');
    var stickyPoint = 4300; // The scroll position in pixels where you want to start fading out
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > stickyPoint) {
        projHeading.classList.add('fade-out');
    } else {
        projHeading.classList.remove('fade-out');
    }
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
