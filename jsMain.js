
 function openNav() {
   document.getElementById("buttonjs").style.width = "250px", display = "none";
   var z = document.getElementById("hamburger");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
 }

 function closeNav() {
   document.getElementById("buttonjs").style.width = "0";
   var z = document.getElementById("hamburger");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }
}

