// Function to add a dynamic greeting message based on time
function dynamicGreeting() {
    const greetingElement = document.createElement('p');
    const currentHour = new Date().getHours();
  
    let greetingMessage;
    if (currentHour < 12) {
      greetingMessage = 'Good Morning!';
    } else if (currentHour < 18) {
      greetingMessage = 'Good Afternoon!';
    } else {
      greetingMessage = 'Good Evening!';
    }
  
    greetingElement.textContent = `Hello! ${greetingMessage} Welcome to my academic site.`;
    
    // Adding the greeting message in the intro section
    document.getElementById('intro').appendChild(greetingElement);
  }
  
  // Function to validate form on the Contact page
  function validateContactForm() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        event.preventDefault(); // Prevent form submission
      } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
      }
    });
  }
  
  // Back to top button functionality
  function backToTop() {
    const button = document.createElement('button');
    button.textContent = 'Back to Top';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.display = 'none'; // Initially hidden
    button.style.padding = '10px';
    button.style.backgroundColor = '#333';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
  
    document.body.appendChild(button);
  
    // Show button when user scrolls down
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    });
  
    // Scroll to top when button is clicked
    button.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Initialize the dynamic functions when DOM content is loaded
  document.addEventListener('DOMContentLoaded', function() {
    dynamicGreeting();
    validateContactForm();
    backToTop();
  });
  