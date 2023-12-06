<?php 
include "../connection.php";

$username = $_POST['user_name'];
$password = $_POST['user_password']; 
$user_type = 'patient';

$query = $mysqli -> prepare("select user_name from users where user_type = ? and user_name = ?");
$query -> bind_param('ss', $user_type, $username);
$query->execute();
$result = $query->get_result();

$num_rows = $result->num_rows;
$arr = $result -> fetch_assoc();

if ($num_rows > 0){
  echo "Patient's name already exists";
}else{
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);
  $add_patient = $mysqli -> prepare("insert into users(user_name, user_password, user_type) values(?,?,?)");
  $add_patient -> bind_param('sss', $username, $hashed_password, $user_type);
  $add_patient -> execute();
  echo "Patient added successfully";
}