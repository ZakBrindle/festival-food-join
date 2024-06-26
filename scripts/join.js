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
          rect1.top > rect2.bottom ||
          rect1.right < rect2.left ||
          rect1.bottom < rect2.top ||
          rect1.left > rect2.right
      );
  }

  function checkCollisions() {
      images.forEach(image => {
          if (isColliding(logo, image, 40)) {
              image.style.display = 'none';
          } else {
             
          }
      });
  }

  window.addEventListener('resize', checkCollisions);
  window.addEventListener('scroll', checkCollisions);

  checkCollisions(); // Initial check
  adjustRegistrationContainer();
  setTimeout(checkCollisions, 500); // 1000 milliseconds = 1 second
  hideItemsOnSmallScreen();
  setTimeout(hideItemsOnSmallScreen, 500); // 1000 milliseconds = 1 second

});


function adjustRegistrationContainer() {
  const mobileThreshold = 898; // Set your mobile width threshold here
  const registrationContainers = document.querySelectorAll('.registration-container');
  const mainLogo = document.getElementById("logo");




  if (window.innerWidth < mobileThreshold) {

      registrationContainers.forEach(container => {
        container.style.width = "100%"; 
        container.style.maxWidth = "1000000px"; // 20px padding on each side
       



        


      });


      hideItemsOnSmallScreen();

      mainLogo.style.width = 'calc(100% - 80px)'; // 20px padding on each side
      mainLogo.style.marginTop = '40px';
      mainLogo.style.marginBottom = '-10px';

      mainLogo.style.marginLeft = '40px';
      mainLogo.style.marginRight = '40px';
      mainLogo.style.maxWidth = '420px';

      document.getElementById("joinForm").style.marginLeft = "25px";
      document.getElementById("joinForm").style.marginRight = "25px";




  } else {
      registrationContainers.forEach(container => {
        container.style.width = ''; // Reset to original width
        container.style.maxWidth = "400px"; // 20px padding on each side
       
              });
          mainLogo.style.width = '420px';
          mainLogo.style.marginTop = '-10px';
          mainLogo.style.marginBottom = '';
          mainLogo.style.marginRight = '';    
          mainLogo.style.marginLeft = '';    

          document.getElementById("joinForm").style.marginLeft = "0px";
          document.getElementById("joinForm").style.marginRight = "0px";

        
  }
}

// Call the function on window resize and on initial load
window.addEventListener('resize', adjustRegistrationContainer);
window.addEventListener('load', adjustRegistrationContainer);




   // Function to hide elements if the screen width is below 800px
   function hideItemsOnSmallScreen() {
    const items = [
        document.getElementById("coffee"),
        document.getElementById("avacado"),
        document.getElementById("borito"),
        document.getElementById("strawberry")
    ];
    
    if (window.innerWidth < 800) {
        items.forEach(item => {
            if (item) {
                item.classList.add('hidden');
            }
        });
        // Store a flag in localStorage to indicate the items have been hidden
        localStorage.setItem('itemsHidden', 'true');
    }
}

// Function to check if items should be hidden based on localStorage flag
function checkAndHideItems() {
    if (localStorage.getItem('itemsHidden') === 'true') {
        const items = [
            document.getElementById("coffee"),
            document.getElementById("avacado"),
            document.getElementById("borito"),
            document.getElementById("strawberry")
        ];

        items.forEach(item => {
            if (item) {
                item.classList.add('hidden');
            }
        });
    }
}

// Initial check on page load
window.onload = function() {
    hideItemsOnSmallScreen();
    checkAndHideItems();
};
