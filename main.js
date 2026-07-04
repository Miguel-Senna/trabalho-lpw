let enlarged_div = document.getElementById("enlarged")
let enlarged_header = document.getElementById("enlarged title")
let enlarged_paragraph_afim = document.getElementById("enlarged text-afim")
let enlarged_paragraph_quad = document.getElementById("enlarged text-quadratica")
let enlarged_paragraph_mod = document.getElementById("enlarged text-modular")
let menu =document.getElementById("menu")
let dropdown = document.getElementById("dropdown")
let shine = document.getElementById("shineBg")
var mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var glow = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function hideCommon() {
    document.getElementById("commonDefTxt").style.display = "none";
    document.getElementById("formalDefTxt").style.display = "block";
    document.getElementById("formalDef").style.backgroundColor = "black";
    document.getElementById("commonDef").style.backgroundColor = "";
}
function hideFormal() {
    document.getElementById("commonDefTxt").style.display = "block";
    document.getElementById("formalDefTxt").style.display = "none";
    document.getElementById("commonDef").style.backgroundColor = "black";
    document.getElementById("formalDef").style.backgroundColor = "";
}

// popup
function hidepopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

function displayelement() {
    enlarged_div.style.display = "flex";
    en.style.display = "block";
}

// if (navigator.userAgent.toLowerCase().includes("firefox")) {
//     document.getElementById("warning").style.display = "none";
//     document.getElementById("popupOverlay").style.display = "none";
// }
function menuButton() {
    dropdown.classList.toggle("show-dropdown")
}
menu.addEventListener("click", menuButton)

window.addEventListener('pointermove', (event) => {
    const speedFactor = 0.0001;

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function animateGlow() {
      glow.x += (mouse.x - glow.x) * speedFactor;
      glow.y += (mouse.y - glow.y) * speedFactor;

      shine.style.setProperty('--mouse-x', `${glow.x}px`);
      shine.style.setProperty('--mouse-y', `${glow.y}px`);

      requestAnimationFrame(animateGlow);
    }

    animateGlow();
})