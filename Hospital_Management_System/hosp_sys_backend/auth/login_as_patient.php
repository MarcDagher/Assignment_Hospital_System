<?php 
include "../connection.php";
 
// $_POST is an associative array that contains data using the HTTP POST method.
// user_name is the name which represents the value of the input field.
$username = $_POST['user_name'];
$password = $_POST['user_password'];
$type = 'patient';

$query_username = $mysqli -> prepare("select user_name, user_password from users where user_name = ? and user_type = ?");
$query_username -> bind_param("ss", $username, $type);
$query_username -> execute();

$user_count_result = $query_username -> get_result();
$fetch_user_record = $user_count_result -> fetch_assoc();

if (empty($fetch_user_record)){ // if no users
  echo "User not found";
}
else{ // if user is found check password

  if (password_verify($password, $fetch_user_record['user_password'])){
    echo "Welcome Patient";
  }
  else {
    echo "Wrong credentials" . "\n";
  }
}