function recPerimeter () {
  var l = document.getElementById("length").value;
  var w = document.getElementById("width").value;
  document.getElementById("recPerimeterOut").innerHTML = 2*l + 2*w;
}

function circleArea () {
  var r = document.getElementById("radius").value;
  document.getElementById("circleAreaOut").innerHTML = Math.PI*r**2;
}

function distance () {
  var x1 = document.getElementById("x1").value;
  var y1 = document.getElementById("y1").value;
  var x2 = document.getElementById("x2").value;
  var y2 = document.getElementById("y2").value;
  
  document.getElementById("distanceOut").innerHTML = Math.sqrt((x2-x1)**2 + (x2-x1)**2);
}

//192(4)(3)