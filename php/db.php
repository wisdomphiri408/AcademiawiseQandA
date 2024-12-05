<?php
header("Content-Type:application/json"); //sending data in json format

$servername = "localhost";
$username = "root";
$password = "";
$database = "asknect";
$conn = new mysqli($servername, $username, $password, $database);

if($conn->connect_error){
    die("Something went wrong: ".$conn->connect_error);
}
?>