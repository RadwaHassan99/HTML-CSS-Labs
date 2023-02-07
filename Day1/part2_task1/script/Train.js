function store(){
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email= document.getElementById("email");
    var date= document.getElementById("date");
    var source = document.getElementById("From");
    var dest = document.getElementById("dest");
    localStorage.setItem("name", name.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("date", date.value);
    localStorage.setItem("source", source.value);
    localStorage.setItem("destination", dest.value);
    sessionStorage.setItem("email", email.value);
    alert(
        'name: '+localStorage.getItem("name")+'\n'+
        'email: '+sessionStorage.getItem("email")+'\n'+
        'phone: '+localStorage.getItem("phone")+'\n'+
        'date: '+localStorage.getItem("date")+'\n'+
        'source: '+localStorage.getItem("From")+'\n'+
        'destination: '+localStorage.getItem("dest")+'\n'
    )
    console.log( location.search);

   }
   










