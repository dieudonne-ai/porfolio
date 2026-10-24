const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn.addEventListener('click', () => mainNav.classList.toggle('open'));

// Mark the link of the current page as pressed (inset), like the active tab in the design
const current = location.pathname.split('/').pop() || 'index.html';
mainNav.querySelectorAll('a').forEach((link) => {
  const target = link.getAttribute('href').split('/').pop();
  if (target === current) link.classList.add('active');
});
