<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");

include "../connection.php";

$username = $_POST['user_name'];
$password = $_POST['user_password'];
$default_user_type = 'patient';

// to get the count of the entered user name in our database 
$user_count_query = $mysqli -> prepare("select count(user_name) from users where user_name=? and user_type = ?");
$user_count_query -> bind_param('ss', $username, $default_user_type);
$user_count_query -> execute();

// get result as an object - store it in $result
$result = $user_count_query -> get_result();
$fetch = $result -> fetch_assoc();
$username_count = $fetch['count(user_name)'];

if ($username_count > 0){
  echo "Username already found";
} else{
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);
  
  $insert_query = $mysqli -> prepare('insert into users(user_name, user_password, user_type) values (?,?,?)');
  $insert_query -> bind_param('sss', $username, $hashed_password, $default_user_type);
  $insert_query -> execute();

  echo "User Created Successfully";
}