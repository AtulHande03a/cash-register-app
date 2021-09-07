const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");
const checkButton = document.getElementById("check-btn");
const errorMessage = document.getElementById("error-message");

checkButton.addEventListener("click", () => {
  errorMessage.style.display = "none";
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("The cash provided should atleast be equal to bill amount");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

const amountToBeReturned = () => {};

const showMessage = (message) => {
  errorMessage.style.display = "block";
  errorMessage.textContent = message;
};
