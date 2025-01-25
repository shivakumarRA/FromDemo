
 const form = document.getElementById("loginForm");

 form.addEventListener("submit", function (event) {
   const password = document.getElementById("password").value;


   if (password.length < 8) {
     event.preventDefault();
     alert("Password must be at least 8 characters long.");
   } else {
     alert("Form submitted successfully!");
   }
 });