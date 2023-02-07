var worker = new Worker("/script/worker.js") 
var sum = document.getElementById("sum");
var bg = document.getElementById("bg");
console.log(sum,bg)

sum.onclick = function(){
   worker.postMessage(""); //delegation "search"
}
worker.onmessage = function(message){
  console.log(message);
  alert(message.data);
}

bg.onclick = function(){
  if(document.body.style.background !== "green"){
      document.body.style.background = "green";
  }else{
      document.body.style.background = "blue";
  }
}














