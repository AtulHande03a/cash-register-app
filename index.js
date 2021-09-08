const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");
const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");
const errorMessage = document.getElementById("error-message");
const cashLabel = document.getElementById("cash-label");
const changeTable = document.getElementById("change-table");
const notesCount = document.querySelectorAll(".notes-count");
const giveChange = document.getElementById("return-amnt");

const notes = [2000, 500, 100, 20, 10, 5, 1];
//on click of next btn

nextBtn.addEventListener("click", () => {
  if (billAmount.value > 0) {
    hideError();
    //display cash label,button,input on next btn click and hide next btn

    cashLabel.style.display = "block";
    cashGiven.style.display = "block";
    checkBtn.style.display = "block";

    nextBtn.style.display = "none";
    //console.log("ran click");
    //console.log(billAmount.value);
  } else {
    showError("Bill Amount should be greater than 0.");
    giveChange.style.display = "none";
  }
});

//show error
const showError = (msg) => {
  errorMessage.style.display = "block";
  errorMessage.textContent = msg;
};

//hide error
const hideError = () => {
  errorMessage.style.display = "none";
};

checkBtn.addEventListener("click", () => {
  let bill = Number(billAmount.value);
  let cash = Number(cashGiven.value);

  if (bill > 0 && cash > bill) {
    hideError();
    calculateChange(cash - bill);
    changeTable.style.display = "block";
    giveChange.style.display = "block";
    giveChange.textContent = `Return Change: ${cash - bill}`;
  } else if (cash < bill) {
    showError("Cash provided is less");
  } else if (cash == bill) {
    showError("No change is required");
  }
});

const calculateChange = (bill) => {
  for (i = 0; i < notes.length; i++) {
    let notesRequired = Math.trunc(bill / notes[i]);
    notesCount[i].textContent = notesRequired;
    bill = bill % notes[i];
  }
};
