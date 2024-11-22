document.querySelectorAll('a[href]:not([href^="#"])').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = targetUrl; 
      }, 100); 
    });
  });