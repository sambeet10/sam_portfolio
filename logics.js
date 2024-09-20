
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

document.getElementById('hamburger').addEventListener('click', function() {
  this.classList.toggle('active'); 
  const navLinks = document.querySelector('nav .left');
  
  // Toggle the active class for showing the links
  if (this.classList.contains('active')) {
    navLinks.style.display = 'flex'; 
    navLinks.style.flexDirection = 'column'; 
  } else {
    navLinks.style.display = 'none';
  }
});

// Close the mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    // If the menu is active, close it
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});
