<?php 
include "../connection.php";

$user_type = $_POST['user_type'];
$user_name = $_POST['user_name'];

$query = $mysqli -> prepare('select user_name from users where user_type = ? and user_name = ?');
$query -> bind_param('ss', $user_type, $user_name);
$query -> execute();

$result = $query -> get_result();
$rows = $result -> num_rows;
$arr = $result -> fetch_assoc();

if ($rows > 0){
  $query_delete = $mysqli -> prepare('delete from users where user_type = ? and user_name = ?');
  $query_delete -> bind_param('ss', $user_type, $user_name);
  $query_delete -> execute();
  echo "User deleted successfully.";

} else {
  echo "User not found in $user_type's list";
}