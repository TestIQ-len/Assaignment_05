const button1 = document.getElementById('blog-btn');
const button2 = document.getElementById('donate-btn');

button1.addEventListener('click', function() {
    // Set focus to button 2
    button2.focus();
  });
