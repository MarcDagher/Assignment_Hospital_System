<?php
include "../connection.php";

$admin = $_POST["user_name"];
$password = $_POST["user_password"];

$query = $mysqli -> prepare("select ad_username, ad_password from admin");
$query -> execute();

$result = $query -> get_result();
$arr = $result -> fetch_assoc();

if ($admin !== $arr['ad_username']){
    echo "User not found";
} else {
  if (password_verify($password, $arr['ad_password'])){
    echo "Welcome boss";
  } else {
    echo "Wrong Credentials";
  }
}