var canvas = document.getElementById("paper");
var c= canvas.getContext("2d");
window.addEventListener('load',function(){
  var startX = 0;
  var startY = 0;
  var endX = 500;
  var endY = 500;
  var amount = 0;
  setInterval(function() {
      amount += 0.05; 
      c.clearRect(0, 0, canvas.width, canvas.height);
      c.strokeStyle = "black";
      c.moveTo(startX, startY);
      startX+=(endX - startX) * amount;
      startY+=(endY - startY) * amount;
      c.lineTo(startX, startY);
      c.stroke();
      if(startX==500 & startY==500){
        alert("Animation Finished");
      }
  }, 150);
});
canvas.onended = function() {
  alert("The audio has ended");
};













