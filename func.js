let width = document.getElementById("func").offsetWidth;
let height = 1200;
const inputFn = document.getElementById("fn");
const buttonFn = document.getElementById("submit-fn");
const getGridState = document.getElementById("gridPresence");

getGridState.checked = true;

buttonFn.addEventListener("click", function () {
  const fnInput = inputFn.value.trim();

  if (!fnInput) {
    alert("Please enter a function.");
    return;
  }

  let derivInput;
  try {
    const node = math.parse(fnInput);
    const derived = math.derivative(node, "x");
    derivInput = derived.toString();
  } catch (e) {
    alert("Could not parse function or compute its derivative: " + e.message);
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
          fn: "x * 2",
          derivative: {
            fn: derivInput,
            updateOnMouseMove: true,
          },
        },
      ],
    });
  } catch (e) {
    alert("Could not plot function: " + e.message);
  }
});