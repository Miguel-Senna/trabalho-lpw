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
var localMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var localGlow = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let shineOBJ = document.querySelectorAll(".shineLocal-OBJ")
let glow_strengh = 1000;
shine.style.setProperty('--shine-size', `1000px`)

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

function menuButton() {
    dropdown.classList.toggle("show-dropdown")
}
menu.addEventListener("click", menuButton)

window.addEventListener('pointermove', (e) => {
    const speedFactor = 0.0001;

    window.addEventListener('pointermove', (e) => {
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

window.addEventListener('mouseup', () => {glow_strengh = 1000;shine.style.setProperty('--shine-size', `${glow_strengh}px`)});
window.addEventListener('mousedown', () => {
    glow_strengh = 1500
    shine.style.setProperty('--shine-size', `${glow_strengh}px`)
});