let frm,correo,pst;
var usuariologeado=false;

function logeo(){
    frm = document.getElementById("form-demo");
    pst = new Pristine(frm);
    frm.addEventListener("submit",function(event){
        event.preventDefault();
        if(frm.correo.value=="admin" && frm.clave1.value=="manguito#0032"){
            alert("Hola admin");
            logeado = true;
        }
        else if (pst.validate()) {
            procesardatos(); 
        }
        else{
            frm.classList.add("was-validated");
        }
        
    });
    
}

function procesardatos(){
    let usuario = localStorage.getItem("usuario");
    if(usuario){
        fetch('scripts/script.php', {
            method: 'post',
            body:new FormData(frm)
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            usuariologeado=validarLocal(json);
            logeado = usuariologeado;
        }).catch(function (err) {
            Error
        });
    }
}

function validarLocal(json)
{
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario.clave1==json.clave1){
        // location.href = "acercade.html";
        alert("Inicio de sesion exitoso");
        return true;
    }
    else{
        alert("Clave incorrecta");
        return false;
    }
}