<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "myfirstdatabase";
$conn = new mysqli($servername, $username, $password, $database);
if($conn->connect_error){
    die(json_encode([
        "success" => false,
        "message" => "Database connection failed."
    ]));
}
echo "Connection Successful";
if($_SERVER["REQUEST_METHOD"]==="POST"){
    $title = $_POST["title"];
    $content = $_POST["content"];

    if(empty($title) || empty($content)){
        echo json_encode([
            "success" => false,
            "message" => "All question field are required"
        ]);
        exit;
    }
    if(strlen($title)>100){
        echo json_encode([
            "success" => false,
            "message" => "Your title exceeds the 100-character limit. Please shorten it while keeping it clear and concise."
        ]);
        exit;
    }

    $sql = $conn->prepare("INSERT INTO questions(title,content)VALUES (?,?);");
    $sql->bind_param("ss",$title,$content);

    if($sql->execute()){
       echo json_encode([
        "success" => true,
        "message" => "You've successfully sent the question"
       ]);
       exit;
    }
    else{
        echo json_encode([
            "success" => false,
            "message" => "Failed to sent your question"
        ]);
        exit;
    }
    $sql->close();
}

$conn->close();

//if data is not handled by POST

echo json_encode([
    "success" =>false,
    "message" => "Something went wrong, please try again",
]);
exit;

?>