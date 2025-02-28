// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  
  // Toggle menu icon between bars and X
  if (mobileMenu.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.nav-mobile .nav-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  });
});

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Get filter value
    const filterValue = btn.getAttribute('data-filter');
    
    // Filter projects
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const btnIcon = document.getElementById('btnIcon');
const btnSpinner = document.getElementById('btnSpinner');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Show loading state
  btnText.textContent = 'Sending...';
  btnIcon.style.display = 'none';
  btnSpinner.style.display = 'block';
  submitBtn.disabled = true;
  
  // Get form data
  const formData = new FormData(contactForm);
  const formDataObj = Object.fromEntries(formData.entries());
  
  // Simulate form submission with timeout
  setTimeout(() => {
    // Reset loading state
    btnText.textContent = 'Send Message';
    btnIcon.style.display = 'inline-block';
    btnSpinner.style.display = 'none';
    submitBtn.disabled = false;
    
    // Show success message
    formMessage.textContent = 'Your message has been sent successfully!';
    formMessage.classList.add('success');
    
    // Reset form
    contactForm.reset();
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.classList.remove('success');
    }, 5000);
  }, 1500);
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    }
  });
});

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.skill-card, .project-card, .about-image, .about-text');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Add initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.skill-card, .project-card, .about-image, .about-text');
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger initial animation
  setTimeout(animateOnScroll, 300);
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);