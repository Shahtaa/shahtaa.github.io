// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form submission handling
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Here, you can add code to handle form submission, like sending data to a server
  // For example, collect form data:
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  
  // Log the collected data for demonstration purposes
  console.log('Form Data:', data);
  
  // You can add an AJAX request or any other necessary functionality here
  // For now, let's just alert a success message
  alert('Form submitted successfully!');
});
