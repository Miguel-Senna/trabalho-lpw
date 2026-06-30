let enlarged_div = document.getElementById("enlarged")
let enlarged_header = document.getElementById("enlarged title")
let enlarged_paragraph_afim = document.getElementById("enlarged text-afim")
let enlarged_paragraph_quad = document.getElementById("enlarged text-quadratica")
let enlarged_paragraph_mod = document.getElementById("enlarged text-modular")

let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")

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
function select_afim() {
    enlarged_div.style.display = "flex"
    box1.style.opacity = "0"
    enlarged_header.textContent = "Função afim"
    enlarged_paragraph_afim.style.display = "block"
}
function select_quad() {
    enlarged_div.style.display = "flex"
    box2.style.opacity = "0"
    enlarged_header.textContent = "Função quadrática"
    enlarged_paragraph_quad.style.display = "block"
}
function select_mod() {
    enlarged_div.style.display = "flex"
    box3.style.opacity = "0"
    enlarged_header.textContent = "Função modular"
    enlarged_paragraph_mod.style.display = "block"
}
function hide_all_select() {
    box1.style.opacity = "1"
    box2.style.opacity = "1"
    box3.style.opacity = "1"
    enlarged_div.style.display = "none"
    enlarged_paragraph_mod.style.display = "none"
    enlarged_paragraph_quad.style.display = "none"
    enlarged_paragraph_afim.style.display = "none"
}
if (navigator.userAgent.toLowerCase().includes("firefox")) {
    document.getElementById("warning").style.display = "none";
    document.getElementById("popupOverlay").style.display = "none";
}