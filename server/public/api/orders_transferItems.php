<?php
    if(!defined("INTERNAL")){
        exit('Direct Access Not Allowed');
    }

    $customerInfo = getBodyData();

    $customerName = $customerInfo['customerName'];
    $customerCreditCard = $customerInfo['customerCreditCard'];
    $customerShippingAddress = $customerInfo['customerShippingAddress'];

    $cartID = intval($_SESSION['cartId']);


    $insertCustomerInfoQuery = 
            "INSERT INTO `customerInfo` (`id`, `cartID`, `customerName`, `customerCreditCard`, `customerShippingAddress`) 
               VALUES (NULL, $cartID, '$customerName', '$customerCreditCard', '$customerShippingAddress')";
    $insertCustomerInfoQueryResult = mysqli_query($conn, $insertCustomerInfoQuery);

    if(!$insertCustomerInfoQueryResult){
        throw new Exception("Connection Error - ") . mysqli_error($conn);
    }

    $transferFromCartToPurchasedQuery =
        "INSERT INTO `purchasedCartItems` (`id`, `productID`, `count`, `price`, `purchasedTimeStamp`, `cartID`)
           SELECT NULL, `productID`, `count`, `price`, NULL, `cartID`
             FROM `cartItems` 
               WHERE `cartID` = '$cartID'";
    $transferFromCartToPurchasedQueryResult = mysqli_query($conn, htmlspecialchars($transferFromCartToPurchasedQuery));

    if(!$transferFromCartToPurchasedQueryResult){
        throw new Exception("Connection Error - " . mysqli_error($conn));
    }

    $deleteQuery = 
        "DELETE FROM `cartItems`
            WHERE `cartID` = '$cartID'";
    $deleteQueryResult = mysqli_query($conn, $deleteQuery);

    if(!$deleteQuery){
        throw new Exception("Delete Error - " . mysqli_error($con));
    }
?>