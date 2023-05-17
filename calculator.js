window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 5000, rate: 3.4, years: 3};

  const amountIn = document.getElementById("loan-amount");
  const rateIn = document.getElementById("loan-rate");
  const yearsIn = document.getElementById("loan-years");

  amountIn.value = values.amount;
  rateIn.value = values.rate;
  yearsIn.value = values.years;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const domValues = getCurrentUIValues();

  updateMonthly(calculateMonthlyPayment(domValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const rate = values.rate / 1200;

  const months = values.years * 12;

  const payment = ((rate * values.amount) / (1 - Math.pow(1 + rate, -months))).toFixed(2);

  return payment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const domPayment = document.getElementById("monthly-payment");

  domPayment.innerText = `$ ${monthly}`;
}
