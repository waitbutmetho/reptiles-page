$(function() {
  var animal = prompt("Do you want to hear about snakes, turtles, or lizards?");

   if (animal === "snakes") {
     $('.snakes').show();
   } else if (animal === "turtles") {
     $('.turtles').show();
   } else if (animal === "lizards") {
     $('.lizards').show();
   }
});
