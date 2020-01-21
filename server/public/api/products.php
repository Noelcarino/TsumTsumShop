<?php

    // header('Content-Type: application/json');

    // if (empty($_GET['id'])) {
    //   readfile('dummy-products-list.json');
    // } else {
    //   readfile('dummy-product-details.json');
    // }

    require_once('functions.php');
    set_exception_handler('error_handler');
    startup();
    require_once('db_connection.php');

    if(isset($_GET['id'])){
      if(!is_numeric($_GET['id'])){
        throw new Exception('id needs to be a number');
      } else {
        $idCheck = $_GET['id'];
        $queryCheck = "SELECT * FROM `products`";
        $result = mysqli_query($conn, $queryCheck);
        $rows = mysqli_num_rows($result);
        if($idCheck > $rows){
          throw new Exception('invalid ID: ' . $idCheck);
        }
      }
    } else {
        $idCheck = false;
    }

    switch($idCheck){
        case true:
            $whereClause = "WHERE `products`.`id` = $idCheck";
            break;
        case false:
            $whereClause = "";
            break;
    }

    $query = "SELECT `products`.*, 
                GROUP_CONCAT(`images-folder`.`image_folder` SEPARATOR ' ') as images
                  FROM `products` 
                    LEFT JOIN `images-folder` 
                      ON `products`.`id` = `images-folder`.`image_id` $whereClause 
                        GROUP BY `products`.`id`";

    $result = mysqli_query($conn, $query);

    if (!$result){
        throw new Exception("Connection error: " . mysqli_error($conn));
    }

    $output = [];

    while ($row = mysqli_fetch_assoc($result)){
    $row['images'] = explode(" ", $row['images']);
    $output[] = $row;
    }

    $json_output = json_encode($output);

    print($json_output);
?>
