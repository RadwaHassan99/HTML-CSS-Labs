function store(){
    var name = document.getElementById("name");
    var pass = document.getElementById("password");
    var email= document.getElementById("email");
    localStorage.setItem("username", name.value);
    localStorage.setItem("password", pass.value);
    localStorage.setItem("email", email.value);
   }

function display(){
    document.getElementById("demo").innerHTML = "welcome "+localStorage.getItem("username")+" , your new email is: "+localStorage.getItem("email");
}   










