<?php

// header('Content-Type: application/json');

// $method = $_SERVER['REQUEST_METHOD'];
// $order = file_get_contents('php://input');

// if ($method != 'POST') {
//   http_response_code(404);
//   print(json_encode([
//     'error' => 'Not Found',
//     'message' => "Cannot $method /api/orders.php"
//   ]));
// } else {
//   http_response_code(201);
//   print($order);
// }

  define("INTERNAL", true);
  require_once('functions.php');
  require_once('db_connection.php');
  session_start();
  set_exception_handler('error_handler');
  
  switch($_SERVER['REQUEST_METHOD'])
  {
    case 'POST':
      require_once('orders_transferItems.php');
      break;
    case 'GET' :
      require_once('orders_get.php');
      break;
  }
?>