<?php

    if(!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }

    $cartID = intval($_SESSION['cartId']);

    $getRecentOrderQuery = 
            "SELECT 
                `purchasedCartItems`.`count`,
                `purchasedCartItems`.`purchasedTimeStamp`,
                `purchasedCartItems`.`cartID`,
                `purchasedCartItems`.`productID`,
                `purchasedCartItems`.`price`,
                `disney-products`.`name` FROM `purchasedCartItems`
               JOIN `disney-products`
                 ON `purchasedCartItems`.`productID` = `disney-products`.`id` 
                   AND `purchasedCartItems`.`cartID` = $cartID";
    $getRecentOrderQueryResult = mysqli_query($conn, $getRecentOrderQuery);

    if(!$getRecentOrderQueryResult){
        throw new Exception('Connection Error - ' . mysqli_error($conn));
    }

    $output = [];

    while ($row = mysqli_fetch_assoc($getRecentOrderQueryResult)){
        $output[] = $row;
    }

    print json_encode($output);
?>