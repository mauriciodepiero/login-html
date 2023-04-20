function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if( user == "prueba" && password == "1234"){
        window.location = "Index2.html";
        alert("Iniciaste Sesion!")
    } else{
        alert("Datos Incorrectos")
        }
    }
