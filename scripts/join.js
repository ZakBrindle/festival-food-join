class JoinComponent {
  constructor() {
    this.fullName = '';
    this.businessName = '';
    this.email = '';
    this.contactNumber = '';
  }

  onSubmit(form) {
    if (form.checkValidity()) {
      const vendorData = {
        fullName: this.fullName,
        businessName: this.businessName,
        email: this.email,
        contactNumber: this.contactNumber
      };

      console.log('Vendor Registration', vendorData);

      // The form will be submitted to Formspree automatically
    } else {
      console.log('Form is invalid');
    }
  }
}

const joinComponent = new JoinComponent();

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  joinComponent.fullName = document.getElementById('full-name').value;
  joinComponent.businessName = document.getElementById('business-name').value;
  joinComponent.email = document.getElementById('email').value;
  joinComponent.contactNumber = document.getElementById('contact-number').value;
  joinComponent.onSubmit(this);

  if (this.checkValidity()) {
    this.submit(); // Submit the form if it's valid
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const logo = document.getElementById('logo');
  const images = document.querySelectorAll('.background-image');

  function isColliding(el1, el2, padding = 20) {
      if (!el1 || !el2) return false;
      const rect1 = el1.getBoundingClientRect();
      const rect2 = el2.getBoundingClientRect();

      return !(
          rect1.top > rect2.bottom + padding ||
          rect1.right < rect2.left - padding ||
          rect1.bottom < rect2.top - padding ||
          rect1.left > rect2.right + padding
      );
  }

  function checkCollisions() {
      images.forEach(image => {
          if (isColliding(logo, image, 40)) {
              image.style.display = 'none';
          } else {
              image.style.display = 'block';
          }
      });
  }

  window.addEventListener('resize', checkCollisions);
  window.addEventListener('scroll', checkCollisions);

  checkCollisions(); // Initial check
  adjustRegistrationContainer();
  setTimeout(checkCollisions, 1000); // 1000 milliseconds = 1 second
});


function adjustRegistrationContainer() {
  const mobileThreshold = 768; // Set your mobile width threshold here
  const registrationContainers = document.querySelectorAll('.registration-container');
  const mainLogo = document.getElementById("logo");

  const item1 = document.getElementById("coffee");
  const item2 = document.getElementById("avacado");
  const item3 = document.getElementById("borito");
  const item4 = document.getElementById("strawberry");



  if (window.innerWidth < mobileThreshold) {
      registrationContainers.forEach(container => {
          container.style.maxWidth = '70%';
          container.style.marginLeft = '10px';
          container.style.marginRight = '-70px';


      });
      mainLogo.style.maxWidth = '90%';
      mainLogo.style.marginTop = '20px';
      mainLogo.style.marginLeft = '10px';
      mainLogo.style.marginRight = '-70px';



      item1.hidden = true;
      item2.hidden = true;
      item3.hidden = true;
      item4.hidden = true;

  } else {
      registrationContainers.forEach(container => {
          container.style.maxWidth = '';
          container.style.marginLeft = '0px';
          container.style.marginRight = '0px'
              });
          mainLogo.style.maxWidth = '';
          mainLogo.style.marginTop = '-10px';
          mainLogo.style.marginLeft = '0px';          
          container.style.marginRight = '0px';
          
          item1.hidden = false;
          item2.hidden = false;
          item3.hidden = false;
          item4.hidden = false;
  }
}

// Call the function on window resize and on initial load
window.addEventListener('resize', adjustRegistrationContainer);
window.addEventListener('load', adjustRegistrationContainer);

