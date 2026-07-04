let width = document.getElementById("func").offsetWidth;
let height = document.getElementById("func").offsetHeight;
const getGridState = document.getElementById("gridPresence");
const addFnButton = document.getElementById("add-fn");
const submitButton = document.getElementById("submit-fn");
const inputsContainer = document.getElementById("fn-inputs");

getGridState.checked = true;

// Add a new input field
addFnButton.addEventListener("click", function () {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Formula da função";
  input.classList.add("fn");
  inputsContainer.appendChild(input);
});

function plot() {
  const fnInputs = [...document.querySelectorAll(".fn")];
  const data = [];

  for (const input of fnInputs) {
    const fnInput = input.value.trim();
    if (!fnInput) continue;

    let derivInput;
    try {
      const node = math.parse(fnInput);
      const derived = math.derivative(node, "x");
      derivInput = derived.toString();
    } catch (e) {
      alert("Could not parse: " + fnInput + "\n" + e.message);
      return;
    }

    data.push({
      fn: fnInput,
      derivative: {
        fn: derivInput,
        updateOnMouseMove: true,
      },
    });
  }

  if (data.length === 0) {
    alert("Por favor selecione pelo menos uma funcao");
    return;
  }

  width = document.getElementById("func").offsetWidth;
  
  try {
    functionPlot({
      target: "#func",
      width,
      height,
      yAxis: { domain: [-1, 9] },
      grid: getGridState.checked,
      data,
    });
  } catch (e) {
    alert("Grafico nao produzido com erro: " + e.message);
  }
}

submitButton.addEventListener("click", plot);