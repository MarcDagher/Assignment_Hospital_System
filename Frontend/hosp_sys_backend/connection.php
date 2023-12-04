<?php 

$host = "localhost";
$db_name = "hospital_db";
$db_user = "root";
$db_password= null;

$mysqli = new mysqli($host, $db_user, $db_password, $db_name);

if ($mysqli -> connect_error){
    die("Connection failed: " . $mysqli -> connect_error);
}