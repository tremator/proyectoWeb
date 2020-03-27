



document.getElementById("RegisterButton").addEventListener("click",function(){

    var User = document.getElementById("User").value;
    var Password = document.getElementById("Password").value;

    Register(User,Password);

})



function Register(User, Password){
    sessionStorage.setItem(User,Password);
    location.replace("file:///home/trematron/Documents/Proyectoweb2-master/Login.html")
}