document.documentElement.classList.add('js');

const blocks = document.querySelectorAll(
  '.hero__inner > *, .brief .narrow, .section-head, .scope, .score-grid, .note, .formula__grid, .bonus-grid, .bonus__note, .plans, .pricing__note, .start__items, .closing__inner'
);

blocks.forEach((block) => block.classList.add('reveal'));

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

  blocks.forEach((block) => observer.observe(block));
} else {
  blocks.forEach((block) => block.classList.add('is-visible'));
}
