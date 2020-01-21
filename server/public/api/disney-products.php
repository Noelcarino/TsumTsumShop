<?php

    require_once('functions.php');
    set_exception_handler('error_handler');
    startup();
    require_once('db_connection.php');

    if(isset($_GET['id'])){
        if(!is_numeric($_GET['id'])){
            throw new Exception('id needs to be a number');
        } else {
            $idCheck = $_GET['id'];
            $queryCheck = "SELECT * FROM `disney-products`";
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
            $whereClause = "WHERE `disney-products`.`id` = $idCheck";
            break;
        case false:
            $whereClause = "";
            break;
    }

    $query = "SELECT `disney-products`.* FROM `disney-products`";
    $query = "SELECT `disney-products`.*, 
            GROUP_CONCAT(`disney-images-folder`.`image_folder` SEPARATOR ' ' ) 
            as images
            FROM `disney-products` 
            LEFT JOIN `disney-images-folder` 
            ON `disney-products`.`id` = `disney-images-folder`.`image_id` 
            $whereClause 
            GROUP BY `disney-products`.`id`";
    
    $result = mysqli_query($conn, $query);
    
    if(!$result) {
        throw new Exception("Connection Error: " . mysqli_error($conn));
    }
    $output = [];

    while ($row = mysqli_fetch_assoc($result)){
        $row['images'] = explode(" ", $row['images']);
        $output[] = $row;
    }

    $json_output = json_encode($output);
    print($json_output);

?>