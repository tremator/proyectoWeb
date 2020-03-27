
document.getElementById('Logout').addEventListener('click',function(){
    sessionStorage.setItem('Login','false')
    location.replace("./Public.html");
});