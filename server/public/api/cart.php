<?php

  define("INTERNAL", true);
    require_once('functions.php');
    require_once('db_connection.php');
    session_start();
    set_exception_handler('error_handler');

    switch($_SERVER['REQUEST_METHOD'])
    {
      case 'POST':
        require_once('cart_add.php');
        break;
      case 'GET':
        require_once('cart_get.php');
        break;
      case 'DELETE':
        require_once('cart_remove.php');
        break;
    }
    
?>
