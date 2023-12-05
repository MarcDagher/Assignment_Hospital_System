<?php 
include "../connection.php";

$username = $_POST['user_name'];
$password = $_POST['user_password'];
$department = $_POST['department'];
$user_type = 'doctor';

$query = $mysqli -> prepare("select user_name from users where user_type = ? and user_name = ?");
$query -> bind_param('ss', $user_type, $username);
$query->execute();
$result = $query->get_result();

$num_rows = $result->num_rows;
$arr = $result -> fetch_assoc();

if ($num_rows > 0){
  echo "Doctor's name already exists";
}else{
  $hashed_password = password_hash($password, PASSWORD_DEFAULT);
  $add_doctor = $mysqli -> prepare("insert into users(user_name, user_password, user_type, department) values(?,?,?,?)");
  $add_doctor -> bind_param('ssss', $username, $hashed_password, $user_type, $department);
  $add_doctor -> execute();
  echo "Doctor added successfully";
}