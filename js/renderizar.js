var resultado;
// window.onload = capturarDatos;
function capturarDatos(){
    resultado = document.getElementById("resultado");

    fetch('https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=U59hGTBLmVncVouImyfDB6LWGF0Yj063', {
    }).then(response => {
        return response.json();
    }).then(function (json) {
        pintarDatos(json);
    }).catch(function (err) {
        console.log(err);
    });
}

function pintarDatos(datos){
    var ans="";
    for(var i = 0; i <= 9; i++){
        ans+="<div class = 'temperatura'>";
        console.log(datos);
        ans+="<p>"+datos.data.timelines[0].intervals[i].values.temperature;
        ans+="</p><br>Temperatura "+(i+1)+" </div>";
    }
    resultado.innerHTML = ans;
}