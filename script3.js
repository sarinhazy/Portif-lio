
 //dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);


    document.getElementById('toggleDarkMode').textContent = isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode';
}


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.5 
  });

  elements.forEach((el) => observer.observe(el));
});

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");

  // Função para atualizar a posição do cursor personalizado
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });

  // Restante do código de animação on scroll
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.5
  });

  elements.forEach((el) => observer.observe(el));
});
