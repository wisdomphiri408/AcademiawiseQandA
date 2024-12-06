<?php
session_start();
header('Content-Type: application/json');
include_once "db.php";

if($_SERVER["REQUEST_METHOD"]=== "POST"){
    $email = $_POST["email"];
    $password = $_POST["password"];

    //making sure email and password field are not empty
    if(empty($email) || empty($password)){
        echo json_encode([
            "success" => false,
            "message" => "Both email and password are required"
        ]);
        exit;
    }
    //validating email address
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo json_encode([
            "success" => false,
            "message" => "Invalid email address"
        ]);
        exit;
    }

    //compering data using prepare statement

    $sql = $conn->prepare("SELECT id, username, pwd FROM users WHERE email=?");
    $sql->bind_param("s",$email);
    $sql->execute();
    $result = $sql->get_result();
    $user = $result->fetch_assoc();

    if($user && password_verify($password, $user["pwd"])){
        $_SESSION["user_id"] = $user["id"];
        $_SESSION["username"] = $user["username"];

        echo json_encode([
            "success" => true,
            "username" => $user["username"]
        ]);
    }
    else{
        echo json_encode([
            "success" => false,
            "message" => "Invalid email or password"
        ]);
    }
    exit;
}

echo json_encode([
    "success" => false,
    "message" => "Invalid request"
]);
exit;
?>
