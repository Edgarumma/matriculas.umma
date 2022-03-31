<?php
if (isset($_POST)){
var_dump($_POST);
    $fecha = new DateTime();
    $DateAndTime = $fecha->format("d-m-Y h:i:s a");
    $nombre_archivo = 'eventosMatricula.csv';
    $contenido = $_POST["evento"].",".$_POST["matricula"]."\n";
    echo $contenido;
    if (file_exists($nombre_archivo)){
        echo "el archivo existe\n";
    }else
        echo "no existe";
    if (is_writable($nombre_archivo)) {

        // En nuestro ejemplo estamos abriendo $nombre_archivo en modo de adición.
        // El puntero al archivo está al final del archivo
        // donde irá $contenido cuando usemos fwrite() sobre él.
        if (!$gestor = fopen($nombre_archivo, 'a+')) {
            echo "No se puede abrir el archivo ($nombre_archivo)";
            exit;
        }

        // Escribir $contenido a nuestro archivo abierto.
        if (fwrite($gestor, $contenido) === FALSE) {
            echo "No se puede escribir en el archivo ($nombre_archivo)";
            exit;
        }

        echo "Éxito, se escribió ($contenido) en el archivo ($nombre_archivo)";

        fclose($gestor);

    } else {
        echo "El archivo $nombre_archivo no es escribible";
    }
header('location: /matriculas.umma-main/index.html');
}

