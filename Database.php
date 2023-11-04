<?php
$servername = "tu_servidor";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $contraseña = password_hash($_POST["contraseña"], PASSWORD_BCRYPT);

    $sql = "INSERT INTO usuarios (nombre, email, contraseña) VALUES ('$nombre', '$email', '$contraseña')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>
