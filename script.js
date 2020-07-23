function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("wrapper").style.display="flex";
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "#4dc3ff";
  document.getElementById("heading").style.display="flex";
}
setTimeout(showPage, 2000);