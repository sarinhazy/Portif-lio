function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    
    document.getElementById('toggleDarkMode').textContent = isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode';
}


window.onload = () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('toggleDarkMode').textContent = '🌞 Light Mode';
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".cursor");
  
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });
  
   
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
  