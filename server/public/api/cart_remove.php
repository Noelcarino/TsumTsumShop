<?php

    if (!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }

    $productToRemove = getBodyData();
    $productID = $productToRemove['productID'];
    $productCartID = $productToRemove['cartID'];

    $removeQuery = "UPDATE `cartItems` SET `count` = `count` - 1 WHERE  `productID` = $productID AND cartID = $productCartID";
    $removeQueryResult = mysqli_query($conn, $removeQuery);


    if(!$removeQueryResult){
        throw new Exception ('Connection Error ' . mysqli_error($conn));
    }

    $deleteIfCountZeroQuery = "DELETE FROM `cartItems` WHERE cartItems.count = 0  
                                   AND cartItems.cartID = $productCartID";
    $deleteIfCountZeroQueryResult = mysqli_query($conn, $deleteIfCountZeroQuery);

    if(!$deleteIfCountZeroQueryResult){
        throw new Exception('Connection Error ' . mysqli_error($conn));
    }
?>

