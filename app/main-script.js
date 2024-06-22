
function openPDF() {
  window.open('./assets/Elevate the Beatherder Experience with festival-food.pdf');
}

function createEmail() {
  var email = "contact@festival-food.co.uk";
  var subject = "I'm reaching out from festival-food.co.uk - Lets talk!";

  // Construct the email URL
  var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject);

  // Open the user's default email client
  window.location.href = mailtoLink;
}

class Order {
    constructor(vendorID, number, time, total, description) {
      this.vendorID = vendorID;
      this.number = number;
      this.time = time;
      this.total = total;
      this.description = description;
    }
  }

function showSettingsMenu() {
    // Your logic here
    this.settingsMenu = !this.settingsMenu;
  }

  function hideSettingsMenu() {
    this.settingsMenu = false;
  }
  

  function showGlamping() {
    this.showGlampingSection = true;    
    
    this.showNotification = false;
    this.showMainImage = false;
    window.scrollTo(0, 0);
  }

  function showCamping() {
    this.showCampingSection = true;
    
    this.showNotification = false;
    this.showMainImage = false;
    window.scrollTo(0, 0);
  }

  function goBack() {
    this.showGlampingSection = false;
    this.showCampingSection = false;
    
    this.showNotification = true;
    this.showMainImage = true;
    window.scrollTo(0, 0);

  }

  
  function selectAddress() {
    this.showGlampingSection = false;
    this.showCampingSection = false;
    this.showMenu = true;    

    this.showNotification = true;
    this.showMainImage = true;
    
    setTimeout(() => {
      this.menuElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 100);

  }

  items = [
    
    {
      name: 'Mexican Burrito',
      type: 'food',
      price: 21,
      imgUrl: 'https://i.imgur.com/SQMJMo0.jpg',
    },
    {
      name: 'Flame Grilled Pizza',
      type: 'food',
      price: 21,
      imgUrl: 'https://i.imgur.com/y1qSwBo.jpg',
    },
    {
      name: 'Cheeseburger & Chips',
      type: 'food',
      price: 19,
      imgUrl: 'https://i.imgur.com/G0uWy7l.jpg',
    },
    
    {
      name: 'Halloumi & Fies',
      type: 'food',
      price: 19,
      imgUrl: 'https://i.imgur.com/aF74nmM.jpg',
    },
    
    {
      name: 'Mac & Cheese',
      type: 'food',
      price: 20,
      imgUrl: 'https://i.imgur.com/zF2d2B3.jpg',
    },
    {
      name: 'Cafe Latte',
      type: 'drink',
      price: 8,
      imgUrl: 'https://i.imgur.com/80Ynlvv.jpg',
    },
    {
      name: 'Flat White',
      type: 'drink',
      price: 8,
      imgUrl: 'https://i.imgur.com/80Ynlvv.jpg',
    },
    {
      name: 'Cup of Tea',
      type: 'drink',
      price: 8,
      imgUrl: 'https://i.imgur.com/80Ynlvv.jpg',
    },
    
    {
      name: 'Hot Chocolate',
      type: 'drink',
      price: 8,
      imgUrl: 'https://i.imgur.com/DBkX0XL.jpg',
    },
    // add more items here
  ];


// VENDOR LOGIN ELEMENTS AND FUNCTIONS ------------------------

// Component logic
let toggleOrders = true; // You can set the default state
let toggleDeliveries = true; // You can set the default state
let showDeliveriesOfflineMessage = false;

document.addEventListener('DOMContentLoaded', function () {
  var toggleOrdersInput = document.getElementById('toggleOrdersInput');

  toggleOrdersInput.addEventListener('change', function () {
      toggleOrderStatus();
  });
});

function toggleOrderStatus() {
  var toggleOrdersInput = document.getElementById('toggleOrdersInput'); 
  console.log("Checkbox state: " + toggleOrdersInput.checked);
  toggleOrders = toggleOrdersInput.checked;
  document.getElementById("vendor-status-text-main").hidden = toggleOrders;
}

function toggleDeliveryStatus() {
  if (toggleDeliveries) {
    // Logic to turn ON deliveries (for delivery ninja)
  } else {
    // Logic to turn OFF deliveries (for delivery ninja)
  }
}

// FOR DELIVERY FOOD RUNNERS
document.addEventListener('DOMContentLoaded', function() {
    const orderList = document.getElementById('incoming-orders-list-delivery-ninja');
  
    if (orderList === null) {
      console.error('The element with id "order-list" was not found.');
      return;
    }
  
    let incomingorders = [
        { vendorID: 10, number: 1, time: '2023-09-10 12:30', total: '£45', description: 'Mexican Burrito x 4' },
        { vendorID: 10, number: 2, time: '2023-09-09 15:20', total: '£18', description: 'Pizza x 1' },
        // Add more orders here
      ];

    incomingorders.forEach(order => {
      const listItem = document.createElement('li');
      listItem.classList.add('order-item');
  
      const orderNumber = document.createElement('span');
      orderNumber.classList.add('order-number');
      orderNumber.textContent = order.number;
  
      const orderDetails = document.createElement('span');
      orderDetails.classList.add('order-details');
      orderDetails.innerHTML = `
        Order Number: ${order.vendorID}-${order.number} <br>
        <span class="order-time">${order.time}</span> <br>
        ${order.description} = total ${order.total}
      `;
  
      listItem.appendChild(orderNumber);
      listItem.appendChild(orderDetails);
      orderList.appendChild(listItem);
    });
  });


document.addEventListener('DOMContentLoaded', function() {
    const orderList = document.getElementById('order-history-list-delivery-ninja');
  
    if (orderList === null) {
      console.error('The element with id "order-list" was not found.');
      return;
    }
  
    let orderhistory = [
      { vendorID: 10, number: 1, time: '2022-08-10 15:30', total: '£18', description: 'Pizza x 1' },
      { vendorID: 10, number: 2, time: '2022-08-09 19:20', total: '£10', description: 'Caramel Latte x 2' },
    ];
  
    orderhistory.forEach(order => {
      const listItem = document.createElement('li');
      listItem.classList.add('order-item');
  
      const orderNumber = document.createElement('span');
      orderNumber.classList.add('order-number');
      orderNumber.textContent = order.number;
  
      const orderDetails = document.createElement('span');
      orderDetails.classList.add('order-details');
      orderDetails.innerHTML = `
        Order Number: ${order.vendorID}-${order.number} <br>
        <span class="order-time">${order.time}</span> <br>
        ${order.description} = total ${order.total}
      `;
  
      listItem.appendChild(orderNumber);
      listItem.appendChild(orderDetails);
      orderList.appendChild(listItem);
    });
  });


// FOR VENDOR------------
document.addEventListener('DOMContentLoaded', function() {
    const orderList = document.getElementById('incoming-orders-list');
  
    if (orderList === null) {
      console.error('The element with id "order-list" was not found.');
      return;
    }
  
    let incomingorders = [
        { vendorID: 10, number: 1, time: '2023-09-10 12:30', total: '£45', description: 'Mexican Burrito x 4' },
        { vendorID: 10, number: 2, time: '2023-09-09 15:20', total: '£18', description: 'Pizza x 1' },
        // Add more orders here
      ];

    incomingorders.forEach(order => {
      const listItem = document.createElement('li');
      listItem.classList.add('order-item');
  
      const orderNumber = document.createElement('span');
      orderNumber.classList.add('order-number');
      orderNumber.textContent = order.number;
  
      const orderDetails = document.createElement('span');
      orderDetails.classList.add('order-details');
      orderDetails.innerHTML = `
        Order Number: ${order.vendorID}-${order.number} <br>
        <span class="order-time">${order.time}</span> <br>
        ${order.description} = total ${order.total}
      `;
  
      listItem.appendChild(orderNumber);
      listItem.appendChild(orderDetails);
      orderList.appendChild(listItem);
    });
  });


document.addEventListener('DOMContentLoaded', function() {
    const orderList = document.getElementById('order-history-list');
  
    if (orderList === null) {
      console.error('The element with id "order-list" was not found.');
      return;
    }
  
    let orderhistory = [
      { vendorID: 10, number: 1, time: '2022-08-10 15:30', total: '£18', description: 'Pizza x 1' },
      { vendorID: 10, number: 2, time: '2022-08-09 19:20', total: '£10', description: 'Caramel Latte x 2' },
    ];
  
    orderhistory.forEach(order => {
      const listItem = document.createElement('li');
      listItem.classList.add('order-item');
  
      const orderNumber = document.createElement('span');
      orderNumber.classList.add('order-number');
      orderNumber.textContent = order.number;
  
      const orderDetails = document.createElement('span');
      orderDetails.classList.add('order-details');
      orderDetails.innerHTML = `
        Order Number: ${order.vendorID}-${order.number} <br>
        <span class="order-time">${order.time}</span> <br>
        ${order.description} = total ${order.total}
      `;
  
      listItem.appendChild(orderNumber);
      listItem.appendChild(orderDetails);
      orderList.appendChild(listItem);
    });
  });


let showVendorMainMenu = true;
let showVendorIncomingOrders = false;
let showVendorOrderHistory = false;

function showIncomingOrders() {
  showVendorMainMenu = false;
  showVendorIncomingOrders = true;
  showVendorOrderHistory = false;
  setElementVisibility();

}

function showOrderHistory() {
  showVendorMainMenu = false;
  showVendorIncomingOrders = false;
  showVendorOrderHistory = true;
  setElementVisibility();

}

function goBackToMainMenuFromIncomingOrders() {
  showVendorMainMenu = true;
  showVendorIncomingOrders = false;
  setElementVisibility();

}

function goBackToMainMenuFromOrderHistory() {
  showVendorMainMenu = true;
  showVendorOrderHistory = false;
  setElementVisibility();
}

function setElementVisibility()
{
    document.getElementById("vendor-incoming-orders").hidden = !showVendorIncomingOrders;
    document.getElementById("vendor-mainmenu").hidden = !showVendorMainMenu;
    document.getElementById("vendor-order-history").hidden = !showVendorOrderHistory;
}

// FOR DELIVERY NINJA

let showDeliveryNinjaMainMenu = true;
let showDeliveryNinjaIncomingOrders = false;
let showDeliveryNinjaOrderHistory = false;


function showIncomingOrders_deliveryNinja() {   
  document.getElementById("delivery-ninja-incoming-orders").hidden = false;
  document.getElementById("delivery-ninja-mainmenu").hidden = true;  
}

function showOrderHistory_deliveryNinja() {
    document.getElementById("delivery-ninja-order-history").hidden = false;
    document.getElementById("delivery-ninja-mainmenu").hidden = true; 
}

function goBackToMainMenuFromIncomingOrders_deliveryNinja() {
    document.getElementById("delivery-ninja-incoming-orders").hidden = true;
    document.getElementById("delivery-ninja-mainmenu").hidden = false;  
  
}

function goBackToMainMenuFromOrderHistory_deliveryNinja() {
    document.getElementById("delivery-ninja-order-history").hidden = true;
    document.getElementById("delivery-ninja-mainmenu").hidden = false; 
}






document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("delivery-ninja-incoming-orders-btn").addEventListener("click", function() {        
        showIncomingOrders_deliveryNinja();
      });   
  
    document.getElementById("delivery-ninja-incoming-orders-backbtn").addEventListener("click", function() {        
        goBackToMainMenuFromIncomingOrders_deliveryNinja();
      });

    document.getElementById("delivery-ninja-order-history-btn").addEventListener("click", function() {        
        showOrderHistory_deliveryNinja();
      });

      document.getElementById("delivery-ninja-order-history-backbtn").addEventListener("click", function() {        
        goBackToMainMenuFromOrderHistory_deliveryNinja();
      });

    


      document.getElementById("vendor-incoming-orders-btn").addEventListener("click", function() {        
        showIncomingOrders();
      });   
  
    document.getElementById("vendor-incoming-orders-backbtn").addEventListener("click", function() {        
        goBackToMainMenuFromIncomingOrders();
      });

    document.getElementById("vendor-order-history-btn").addEventListener("click", function() {        
        showOrderHistory();
      });

      document.getElementById("vendor-order-history-backbtn").addEventListener("click", function() {        
        goBackToMainMenuFromOrderHistory();
      });

   




  });



  document.addEventListener("DOMContentLoaded", function() {
    // Get the radio buttons
    const vendorBoardBtn = document.getElementById("vendor-board-btn");
    const festivalGoerBoardBtn = document.getElementById("festival-goer-board-btn");
  
    // Get the message boards
    const boardMessageVendors = document.getElementById("board-message-vendors");
    const boardMessageFestivalGoers = document.getElementById("board-message-festival-goers");
  
    // Initially hide the festival goers board and show vendors board
    boardMessageVendors.style.display = "none";
    boardMessageFestivalGoers.style.display = "block";
  
    // Listener for vendor board button
    vendorBoardBtn.addEventListener("click", function() {
      boardMessageVendors.style.display = "block";
      boardMessageFestivalGoers.style.display = "none";
    });
  
    // Listener for festival goer board button
    festivalGoerBoardBtn.addEventListener("click", function() {
      boardMessageVendors.style.display = "none";
      boardMessageFestivalGoers.style.display = "block";
    });
  });
  


  document.addEventListener("DOMContentLoaded", function() {
// Create an Intersection Observer to watch for when the element comes into view
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    // If the element is in the viewport
    if (entry.isIntersecting) {
      // Add the 'bounce' class to start the animation
      entry.target.classList.add('bounce');

      // Remove the 'bounce' class after 2 seconds to stop the animation
      setTimeout(() => {
        entry.target.classList.remove('bounce');
      }, 2000);

      // Optionally, unobserve the element if you only want it to bounce once
      observer.unobserve(entry.target);
    }
  });
});

// Target the label element
const vendorLabel = document.querySelector("label[for='vendor-board-btn']");

// Start observing the element
observer.observe(vendorLabel);

  });