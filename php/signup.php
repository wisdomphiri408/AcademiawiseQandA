<?php
header('Content-Type: application/json');
include_once "db.php";

    // Server-side CAPTCHA validation
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $username = $_POST["username"];
        $pwd = $_POST["pwd"];
        $email = $_POST["email"];
        $year_of_study = $_POST["year_of_study"];
        $accepted_terms = intval($_POST["accepted_terms"]);
        $captcha = $_POST["captcha"];


        if ($accepted_terms !== 1) {
            echo json_encode([
                "success" => false,
                "message" => "You must accept the terms and conditions!"
            ]);
            exit;
        }

        // CAPTCHA validation
        if ($captcha !== "5") {
            echo json_encode(["success" => false, 
            "message" => "CAPTCHA validation failed."
        ]);
            exit;
        }
        if(empty($username) || empty($email) || empty($pwd)){
            echo json_encode([
                "success" => false,
                "message" => "Please complete all required fields."
            ]);
            exit;
        }
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            echo json_encode([
                "success" => false,
                "message" => "Please enter a valid email address."
            ]);
            exit;            
        }

        if(strlen($pwd)<8){
            echo json_encode([
                "success" => false,
                "message" => "Your password must be at least 8 characters long for better security."
            ]);
        }
        $hashedPassword = password_hash($pwd, PASSWORD_BCRYPT);

        // Prepare the SQL query to prevent SQL injection
        $sql = $conn->prepare("INSERT INTO users(username, pwd, email, year_of_study, accepted_terms) VALUES(?, ?, ?, ?, ?);");
        $sql->bind_param("sssii", $username, $hashedPassword, $email, $year_of_study, $accepted_terms);

        // Execute the query and handle errors securely
        if ($sql->execute()) {
            echo json_encode([
                "success" => true,
                "message" => "Data saved successfully. Welcome, $username"
            ]);
            exit;
        } else {
            // Log the error (avoid exposing detailed errors to users)
            error_log("Database error: " . $sql->error);
            echo json_encode([
                "success" => false,
                "message" => "An error occurred. Please try again."
            ]);
            exit;
        }
        // Close the prepared statement and connection
        $sql->close();
    }
    $conn->close();

    //denie other methods like GET
    echo json_encode([
        "success" => false,
        "message" => "Something went wrong, please try again."
    ]);
    exit;
?>
