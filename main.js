
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
if (navigator.userAgent.toLowerCase().includes("firefox")) {
    document.getElementById("warning").style.display = "none";
    document.getElementById("popupOverlay").style.display = "none";
}