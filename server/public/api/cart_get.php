<?php

    if(!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }

    if (!isset($_SESSION['cartId'])){
        print(json_encode([]));
        exit();
    }

    $cartID = intval($_SESSION['cartId']);

    $fetchQuery = "SELECT 
                    `cartItems`.`count`,
                    `cartItems`.`cartID`,
                    `disney-products`.`id`,
                    `disney-products`.`name`,
                    `disney-products`.`price`,
                    `disney-products`.`image`,
                    `disney-products`.`shortDescription`
                    FROM `cartItems` 
                        LEFT JOIN `disney-products`
                            ON `cartItems`.`productID` = `disney-products`.`id`
                                WHERE `cartItems`.`cartID` = $cartID";
    $fetchQueryResult = mysqli_query($conn, $fetchQuery);

    if (!$fetchQueryResult){
        throw new Exception("Query Failure - " . mysqli_error($conn));
    }

    $output = [];
    while($row = mysqli_fetch_assoc($fetchQueryResult)){
        $output[] = $row;
    }

    if ($output === "[]"){
        print("The result is an empty array");
        exit();
    }

    print(json_encode($output));
    
?>