function myFunction() {
   var a = document.getElementById("length").value;
  var b = document.getElementById("width").value;
  
     var x= parseInt(a);
    var y =parseInt(b);
    var f = x * y;
    var mdos = Math.sqrt( f * f * 0.09290304)

  
   document.getElementById("calculated").innerHTML = 
     "You entered dimensions of " + x + " feet by " + y +" feet."+
     "<br>" + "The area is " + f + " square feet." + "<br>" +
      mdos +"and square meters";
  
     
  
}