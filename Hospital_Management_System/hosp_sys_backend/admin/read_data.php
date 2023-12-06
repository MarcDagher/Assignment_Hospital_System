<?php 
include "../connection.php";

  $show_patients = isset($_GET['show_patients']) ? $_GET['show_patients'] : null;
  $show_doctors = isset($_GET['show_doctors']) ? $_GET['show_doctors'] : null;
  $show_rooms = isset($_GET['show_rooms']) ? $_GET['show_rooms'] : null;


  // PATIENTS //

  if ($show_patients !== null){
    $user_type = 'patient';
    $query_patients = $mysqli -> prepare('select * from users where user_type = ?');
    $query_patients -> bind_param('s', $user_type);
    $query_patients -> execute();
    $result = $query_patients -> get_result();
    
    $arr = [];
    while ($patient = $result->fetch_assoc()){
      $arr[] = $patient;
    }
    echo json_encode($arr);

    // DOCTORS // 

  } elseif ($show_doctors !== null){
    $user_type = 'doctor';
    $query_doctors = $mysqli -> prepare('select * from users where user_type = ?');
    $query_doctors -> bind_param('s', $user_type);
    $query_doctors -> execute();
    $result = $query_doctors -> get_result();
    
    $arr = []; 

    while ($doctor = $result->fetch_assoc()){
      $arr[] = $doctor;
    }
    echo json_encode($arr);
  }

  // EMERGENCY ROOMS //

  elseif ($show_rooms === 'emergency'){
    $room_type = 'emergency';
    $query_room = $mysqli -> prepare('select * from rooms where room_type = ?');
    $query_room -> bind_param('s', $room_type);
    $query_room -> execute();

    $query_room -> store_result();
    $query_room -> bind_result($room, $user, $type, $status);

    $arr = [];
    while ($query_room -> fetch()){
      $id_query = $mysqli -> prepare('select user_name from users where user_id = ?');
      $id_query -> bind_param('i', $user);
      $id_query -> execute(); 
      $result = $id_query -> get_result();
      $name = $result -> fetch_all();

      $arr[] = ["room" => $room, "user" => $name[0][0], "room type" => $type, "status" => $status ]; 
    };

    for ($i=0; $i < count($arr); $i++)
    echo json_encode($arr[$i]) . "\n";
  }


  // PATIENTS ROOMS //

  elseif ($show_rooms === 'patient'){
    $room_type = 'patient';
    $query_room = $mysqli -> prepare('select * from rooms where room_type = ?');
    $query_room -> bind_param('s', $room_type);
    $query_room -> execute();
    $query_room -> store_result();
    $query_room -> bind_result($room, $user, $type, $status);

    $arr = [];
    while ($query_room -> fetch()){
      $id_query = $mysqli -> prepare('select user_name from users where user_id = ?');
      $id_query -> bind_param('i', $user);
      $id_query -> execute(); 
      $result = $id_query -> get_result();
      $name = $result -> fetch_all();

      $arr[] = ["room" => $room, "user" => $name[0][0], "room type" => $type, "status" => $status ]; 
    };

    for ($i=0; $i < count($arr); $i++)
    echo json_encode($arr[$i]) . "\n";
  }
