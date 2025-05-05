function showCategory(category) {
  const sections = document.querySelectorAll('.gallery-section');
  sections.forEach(section => {
    section.style.display = section.classList.contains(category) ? 'flex' : 'none';
  });
}

showCategory('interior'); 