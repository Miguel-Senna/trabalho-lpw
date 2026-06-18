let contentsBounds = document.body.getBoundingClientRect();
let width = document.getElementById("func").offsetWidth;
let height = 1250;

functionPlot({
  target: "#func",
  width,
  height,
  yAxis: { domain: [-1, 9] },
  grid: true,
  data: [
    {
      fn: "x^2",
      derivative: {
        fn: "2 * x",
        updateOnMouseMove: true
      }
    }
  ]
});
