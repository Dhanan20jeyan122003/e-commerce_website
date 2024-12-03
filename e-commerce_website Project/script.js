// Function to filter products based on search input
function searchFunction() {
  // Get the search input value and convert it to lowercase
  const input = document.querySelector('.searchbar input').value.toLowerCase();
  // Select all the product figures on the page
  const products = document.querySelectorAll('.Kitchen figure');

  // Loop through each product figure
  products.forEach((product) => {
    // Get the product name from the figcaption and convert it to lowercase
    const productName = product.querySelector('figcaption h6').innerText.toLowerCase();

    // Check if the product name includes the search input
    if (productName.includes(input)) {
      // Show the product if it matches the search
      product.style.display = '';
    } else {
      // Hide the product if it does not match the search
      product.style.display = 'none';
    }
  });
}

function updateCountdown() {
  const christmasDate = new Date('December 25, 2024 00:00:00').getTime();
  const now = new Date().getTime();
  const timeDifference = christmasDate - now;

  if (timeDifference <= 0) {
      document.querySelector('.countdown').innerHTML = '<h1>Merry Christmas!</h1>';
      return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days < 10 ? '0' + days : days;
  document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdown, 1000);