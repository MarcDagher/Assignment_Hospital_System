<?php
include "../connection.php";

$doctor = $_POST['user_name'];
$password = $_POST['user_password'];
$type = 'doctor';

$query = $mysqli -> prepare("select user_name, user_password from users where user_type = ? and user_name = ?");
$query -> bind_param('ss', $type, $doctor);
$query -> execute();

$result = $query -> get_result();
$arr = $result -> fetch_assoc();


if (empty($arr)){
  echo "Doctor not found";
} else {
  if (password_verify($password, $arr['user_password'])){
    echo "Welcome doctor";
  } else {
    echo "Wrong credentials";
  }
}