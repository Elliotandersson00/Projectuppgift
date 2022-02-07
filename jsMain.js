
 function openNav() {
   document.getElementById("buttonjs").style.width = "295px";
  document.getElementById("hamburger").style.visibility= "hidden";
   
 }

 function closeNav() {
   document.getElementById("buttonjs").style.width = "0";
   document.getElementById("hamburger").style.visibility = "visible";
  
}


function validation(){
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
  if(email.match(pattern))
  {
    form.classList.add("valid");
    form.classList.remove("invalid");
   
    text.innerHTML = "Your Email Adress is valid"
   document.getElementById("text").style.color = "#009933"
  }
  else
  {
      
    form.classList.remove("valid");
    form.classList.add("invalid");
   
    text.innerHTML = "Enter a valid Email"
    document.getElementById("text").style.color = "#ff0000"
    
  }
  
} 
// function ValidateEmail(inputText)
// {
// var mailformat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
// if(inputText.value.match(mailformat))
// {
// alert("Valid email address!");
// document.form1.text1.focus();
// return true;
// }
// else
// {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
// }
// }