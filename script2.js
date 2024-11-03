function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Altera o ícone do botão
    document.getElementById('toggleDarkMode').textContent = isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode';
}

// Verifica se o usuário já ativou o modo escuro antes e aplica
window.onload = () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('toggleDarkMode').textContent = '🌞 Light Mode';
    }
};

// Função para manipulação do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (name && email && message) {
        alert('Mensagem enviada com sucesso!');
        event.target.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
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
  