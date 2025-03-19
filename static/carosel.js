let index = 0;
let isAutoSliding = true;
const slideDuration = 350; 

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    const firstClone = slides[0].cloneNode(true);
    const secondClone = slides[1].cloneNode(true);
    const thirdClone = slides[2].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);
    
    carousel.appendChild(firstClone);
    carousel.appendChild(secondClone);
    carousel.appendChild(thirdClone);
    carousel.insertBefore(lastClone, slides[0]);

    function moveSlide(step) {
        index += step;

        carousel.style.transition = 'transform 0.3s ease-in-out';
        carousel.style.transform = `translateX(-${index * 25}%)`;

        setTimeout(() => {
            if (index >= totalSlides) {
                carousel.style.transition = 'none';
                index = 0;
                carousel.style.transform = `translateX(-${index * 25}%)`;
            } else if (index < 0) {
                carousel.style.transition = 'none';
                index = totalSlides - 1;
                carousel.style.transform = `translateX(-${index * 25}%)`;
            }
        }, slideDuration);
    }

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', function () {
            moveSlide(1);
            isAutoSliding = false;
        });

        prevButton.addEventListener('click', function () {
            moveSlide(-1);
            isAutoSliding = false;
        });
    }

    function autoSlide() {
        if (isAutoSliding) {
            moveSlide(1);
        }
        setTimeout(autoSlide, 2000);
    }

    setTimeout(autoSlide, 2000);
});