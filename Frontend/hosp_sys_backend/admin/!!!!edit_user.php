<?php
include "../connection.php";

$username = $_POST['user_name'];
$password = $_POST['user_password'];
$user_type = $_POST['user_type'];
$department = $_POST['department'];


if (isset($username)){
  $new_name_query = $mysqli -> prepare('select user_name from users wher');
}

$query = $mysqli -> prepare('');


