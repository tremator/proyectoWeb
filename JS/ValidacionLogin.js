


var login = sessionStorage.getItem('Login')

if( login == 'true' ){

}else{
    alert('No Ha Iniciado Session !!!')

    location.replace('./Public.html')
}
