document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById('burger');
  const navList = document.getElementById('nav-list');
  const navBtn = document.getElementById('nav-btn');

  burger.addEventListener('click', function() {
      burger.classList.toggle('toggle');
      navList.classList.toggle('nav__list--visible');
      navBtn.classList.toggle('nav__btn--visible');
      if (navList.classList.contains('nav__list--visible')) {
          document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Dark background
      } else {
          document.body.style.backgroundColor = ''; // Reset background
      }
  });
});




function updatePrincipal(value) {
  var principalAmount = document.getElementById('principalAmount');
  var grid_i = document.querySelector('.grid__i');
  principalAmount.textContent = value;
  grid_i.textContent = value + "$";

  calculateYields();
}

function updateTerm(value) {
  var termAmount = document.getElementById('termAmount');
  var grid_i = document.querySelector('.grid__i');
  termAmount.textContent = value;
  grid_i.textContent = value + " мес";

  calculateYields();
}

function calculateYields() {
  var principal = parseInt(document.getElementById('field1').value);
  var term = parseInt(document.getElementById('field2').value);

  var totalIncome = principal * 10; 
  var monthlyIncome = totalIncome / term; 

  document.getElementById('totalIncome').textContent = totalIncome.toLocaleString();
  document.getElementById('monthlyIncome').textContent = monthlyIncome.toFixed(2); 
}

calculateYields();