window.onload = () => {
  const tuck = document.getElementById("tuck");

  tuck.addEventListener("mouseover", function() {
    if (tuck.getAttribute("src") == "Tuck.jpeg") {
      tuck.src = "Couch PotaTuck.jpeg";
    }
    else {
      tuck.src = "Tuck.jpeg";
    }
  });
}
