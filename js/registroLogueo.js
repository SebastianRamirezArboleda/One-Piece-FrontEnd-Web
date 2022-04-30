let pst, frm;

window.onload = function () {
    frm = document.getElementById("form-demo");
    pst = new Pristine(frm);

    frm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (pst.validate()) {
            procesarDatos();
        }
        else{
            frm.classList.add("was-validated");
        }
        });
    frm.addEventListener('reset', function (e) {
        frm.classList.remove("was-validated");
    });
};

function procesarDatos() {
    // url (required), options (optional)
    fetch('scripts/script.php', {
        method: 'post',
        body:new FormData(frm)
    }).then(function (response) {
        return response.json();
    }).then(function (json) {
        guardarLocal(json);
    }).catch(function (err) {
        Error
    });
}

function guardarLocal(json){
    localStorage.setItem("usuario",JSON.stringify(json));
    location.href = "index.html";
}