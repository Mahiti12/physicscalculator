document.getElementById("mobile-icon").addEventListener("click", function() {
  var icon = document.getElementById("mobile-icon");
  var iconName = icon.getAttribute("name");

  var nav = document.querySelectorAll("li");
  console.log(nav);

  if(iconName === "reorder-four-outline") {
    icon.setAttribute("name", "close-outline");
    for(var i = 0; i < nav.length; i++) {
      console.log(nav[i]);
      nav[i].style.display = "block";
    }
    nav.style.display = "block";
  }
  else if(iconName === "close-outline") {
    icon.setAttribute("name", "reorder-four-outline");
    for(var i = 0; i < nav.length; i++) {
      nav[i].style.display = "none";
    }
  }

});
