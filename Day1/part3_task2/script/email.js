function store(){
    var name = document.getElementById("username");
    var email= document.getElementById("email");
    const emailField = document.getElementById('email');
    const isValidEmail = emailField.checkValidity();
    
    if(name.value != "" && email.value!=""){
        localStorage.setItem("name", name.value);
        sessionStorage.setItem("email", email.value);
        
        alert(
            'name: '+localStorage.getItem("name")+'\n'+
            'email: '+sessionStorage.getItem("email")+'\n'
        )
    }

   }

   


   
   










