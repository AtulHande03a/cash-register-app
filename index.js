const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");
const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");
const errorMessage = document.getElementById("error-message");
const cashContainer = document.getElementById("cash-container");
const changeTable = document.getElementById("change-Table");

nextBtn.addEventListener("click", () => {
  if (billAmount.value > 0) {
    hideMessage();
    nextBtn.style.display = "none";
    cashContainer.style.display = "flex";
    changeTable.style.display = "none";
  } else {
    showError("Bill amount should be greater than 0.");
  }
});

const hideMessage = () => {
  errorMessage.style.display = "none";
  errorMessage.innerText = "";
};
const showError = (message) => {
  errorMessage.style.display = "block";
  errorMessage.textContent = message;
};
