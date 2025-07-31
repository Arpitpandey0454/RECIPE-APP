const searchInput = document.getElementById('search');
const recipeCards = document.querySelectorAll('.recipe-card');
const toggleBtn = document.getElementById('toggle-mode');
const favButtons = document.querySelectorAll('.fav-btn');

// Search Functionality
searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  recipeCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const ingredients = card.querySelector('p').textContent.toLowerCase();
    card.style.display = (title.includes(keyword) || ingredients.includes(keyword)) ? 'block' : 'none';
  });
});

// Dark/Light Mode Toggle
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Favorite Button Toggle
favButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('favorited');
  });
});

// Read more button

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".read-more-btn");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".recipe-card");
        const dots = card.querySelector(".dots");
        const moreText = card.querySelector(".more");
  
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          moreText.style.display = "none";
          btn.textContent = "Read more";
        } else {
          dots.style.display = "none";
          moreText.style.display = "inline";
          btn.textContent = "Read less";
        }
      });
    });
  });
  
  