var login = false;

var users = [
    ["Merci","1234"],["Daniel","1234"]
];

for(let i=0;i<users.length;i++){
    sessionStorage.setItem(users[i][0],users[i][1]);
}

function Login(pUser,pPassword){
    if(sessionStorage.getItem(pUser)!= "" && pPassword == sessionStorage.getItem(pUser)){
        login = true;
        sessionStorage.setItem("Login","true");
        console.log(login);
    }
    return login;
}



document.getElementById("btnIngresar").addEventListener("click",function(){
    var user = document.getElementById("User").value;
    var passWord = document.getElementById("Password").value;
    var login =  Login(user,passWord);
    if(login){
        location.replace("file:///home/trematron/Documents/Proyectoweb2-master/Welcome.html");
    }
});

bro

