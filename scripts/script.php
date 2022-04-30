<?php
$salt = "matrix";
$usuario = array();
if (isset($_POST["nombre"]) && isset($_POST["apellido"]) && isset($_POST["correo"])) {
    $usuario["nombre"] = $_POST["nombre"];
    $usuario["apellido"] = $_POST["apellido"];
    $usuario["correo"] = $_POST["correo"];
}

$usuario["clave1"] = md5($salt.$_POST["clave1"]);
echo json_encode($usuario);

?>