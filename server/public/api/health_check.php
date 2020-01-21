<?php

require_once('db_connection.php');

header("Content-Type: application/json");

$body = [
  'error' => null,
  'message' => 'Connected to database successfully!'
];

if ($db->connect_error) {
  http_response_code(500);
  $body['message'] = 'Failed to connect to database...';
  $body['error'] = $db->connect_error;
} else {
  http_response_code(200);
}

$json = json_encode($body);

print($json);

?>
