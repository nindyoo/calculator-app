const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let currentInput = "";

buttons.addEventListener("click", (e) => {
  const target = e.target;

  if (!target.matches("button")) return;

  const value = target.dataset.value;
  const action = target.dataset.action;

  if (value) {
    appendValue(value);
  }

  if (action) {
    handleAction(action);
  }
});

function appendValue(val) {
  currentInput += val;
  updateDisplay();
}

function handleAction(action) {
  switch (action) {
    case "clear":
      currentInput = "";
      break;

    case "delete":
      currentInput = currentInput.slice(0, -1);
      break;

    case "equals":
      calculate();
      break;
  }
  updateDisplay();
}

function calculate() {
  try {
    // NOTE: eval dipakai di level junior untuk simpel
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = "Error";
  }
}

function updateDisplay() {
  display.value = currentInput;
}