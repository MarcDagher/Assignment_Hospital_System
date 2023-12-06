<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$db_name = "hospital_db";
$db_user = "root";
$db_password= null;

$mysqli = new mysqli($host, $db_user, $db_password, $db_name);

if ($mysqli -> connect_error){
    die("Connection failed: " . $mysqli -> connect_error);
} else {
    // echo "Connection Successful";
}