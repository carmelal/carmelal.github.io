window.onload = () => {
  const headshot = document.getElementById("carmela");

  headshot.addEventListener("click", function() {
    if (headshot.getAttribute("src") == "Carmela Headshot.jpg") {
      headshot.src = "Carmela Leung.JPG";
    }
    else {
      headshot.src = "Carmela Headshot.jpg";
    }
  });
}