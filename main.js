
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
    document.getElementById("enlarged").style.display = "block";
    document.getElementById("enlarged-overlay").style.display = "block";
}
function selectFunc_afim() {
    displayelement();
    document.getElementById("large-title").textContent = "Função afim";
}
function hideelement() {
    document.getElementById("enlarged").style.display = "none";
    document.getElementById("enlarged-overlay").style.display = "none";
}

document.getElementById("enlarged-overlay").onclick = hideelement();