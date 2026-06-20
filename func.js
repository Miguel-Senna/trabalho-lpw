let width = document.getElementById("func").offsetWidth;
let height = width/2;
const inputFn = document.getElementById("fn");
const buttonFn = document.getElementById("submit-fn");
const getGridState = document.getElementById("gridPresence");

getGridState.checked = true;

function plot() {
  const fnInput = inputFn.value.trim();

  if (!fnInput) {
    alert("Por favor forneça uma funçao");
    console.log("Failed to plot with outcome: expected arguments (char 1)");
    return;
  }

  let derivInput;
  try {
    const node = math.parse(fnInput);
    const derived = math.derivative(node, "x");
    derivInput = derived.toString();
  } catch (e) {
    console.log("Failed to plot with outcome: " + e.message);
    alert("Função incompleta ou invalida, por favor tente novamente")
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
      data: [
        {
          fn: fnInput,
          derivative: {
            fn: derivInput,
            updateOnMouseMove: true,
          },
        },
      ],
    });
  } catch (e) {
    console.log("Could not plot function: " + e.message);
    alert("Função invalida, por favor tente novamente")
  }
}

buttonFn.addEventListener("click", plot);