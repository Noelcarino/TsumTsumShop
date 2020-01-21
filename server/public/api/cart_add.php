<?php

    if (!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }

    $product = getBodyData();
    $productID = intval($product['id']);

    if($productID  > 0 === FALSE){
        throw new Exception("product id must be valid: " . $productID);
    }

    if ((gettype($productID) !== "integer")){
        throw new Exception('product id must be valid: ' . $productID);
    }

    if (isset($_SESSION['cartId'])){
        $cartID = $_SESSION['cartId'];
    } else {
        $cartID = FALSE;
    }

    $query = "SELECT `disney-products`.`id`, `disney-products`.`name`, `disney-products`.`price`
                FROM `disney-products` 
                  WHERE `disney-products`.`id` = '$productID'" ;

    $queryResult = mysqli_query($conn, $query);

    if (!$queryResult){
        throw new Exception('Connection Error ' . mysqli_error($conn));
    } else {

        $rowCheck = mysqli_num_rows($queryResult);

        if($rowCheck === 0){
            throw new Exception("invalid product id " . $productID);
        }

        $productData = [];

        while( $row = mysqli_fetch_assoc($queryResult)){
            $productData[] = $row;
            $productPrice = $productData[0]['price'];
        }

        $json_output = json_encode($productData);
        print($json_output);
    }

    $transactionQuery = "START TRANSACTION";
    $transactionResult = mysqli_query($conn, $transactionQuery);

    if (!$transactionResult){
        throw new Exception("transaction failed ~~ " . mysqli_error($conn));
    }

    if (!$cartID){
        $insertQuery = "INSERT INTO `cart` 
                          SET `created` = NOW()";
        $insertResult = mysqli_query($conn, $insertQuery);

        if(!$insertResult){
            throw new Exception("Insertion failed~~ " . mysqli_error($conn));
        }

        if (mysqli_affected_rows($conn) !== 1){
            throw new Exception("Inserted Row not found ~~");
        }

        $cartID = mysqli_insert_id($conn);
        $_SESSION['cartId'] = $cartID;
    }

    $secondInsertQuery = "INSERT INTO `cartItems`
                            SET 
                                `count` = 1, 
                                `productID` =  $productID, 
                                `price` = $productPrice,
                                `added` = NOW(),
                                `cartID` = $cartID
                              ON DUPLICATE KEY UPDATE `count` = `count` + 1";
    
    $secondInsertQueryResult = mysqli_query($conn, $secondInsertQuery);
    
    if (!$secondInsertQueryResult){
        throw new Exception("second insert failed ~~ " . mysqli_error($conn));
    }

    if (mysqli_affected_rows($conn) < 1 ){
        mysqli_query($conn, "ROLLBACK");
        throw new Exception("Affected row not equal to 1");
    }

    mysqli_query($conn, "COMMIT");
?>