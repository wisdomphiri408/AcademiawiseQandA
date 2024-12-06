<?php
// Assuming you have a session or database check for the logged-in user
session_start();

if (isset($_SESSION['username'])) {
    echo json_encode(['username' => $_SESSION['username']]);
} else {
    echo json_encode(['error' => 'User not logged in']);
}
?>
