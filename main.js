

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementsByClassName("contactForm");

    form.addEventListener("submit", function (e) {
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");

      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        e.preventDefault();
        alert("Please fill in all fields.");
      }
    });
  });


 

  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20, // Adjust the offset as needed
            behavior: "smooth"
          });
        }
      });
    });
  });


