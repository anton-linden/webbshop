<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ws2';

/*$servername = 'localhost';
$username = 'adm';
$password = 'myserverx';
$dbname = 'ws';*/

$data = json_decode(file_get_contents('php://input'), true);
$customerID = $data["customerID"];
if (strlen($customerID) > 0) {
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
try {
    $conn->autocommit(FALSE);
  $sql = "INSERT INTO orders (customerID) VALUES ('$customerID')";

  if ($conn->query($sql) === TRUE) {
    echo 1;
  } else {       
        throw new Exception($conn->error);
  }
  $conn->commit();
  $conn->autocommit(TRUE);
}
catch ( Exception $e ) {

    $conn->rollback(); 
    $conn->autocommit(TRUE); //End transaction
    echo 2;
}
  $conn->close();
}
?>