<?php

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