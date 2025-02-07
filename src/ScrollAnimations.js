const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
};

export const initScrollAnimations = () => {
  const observer = new IntersectionObserver(handleIntersect, observerOptions);
  
  const animatedElements = document.querySelectorAll('.scroll-animation, .fade-in-left, .fade-in-right');
  animatedElements.forEach(el => observer.observe(el));
}; 