<?php
if ($_GET["start_date"]) {
    $start_date = htmlspecialchars($_GET["start_date"]);
    if ($_GET["end_date"]) {
        $end_date = htmlspecialchars($_GET["end_date"]);
        header("Access-Control-Allow-Origin: *");
         header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
         header("X-Requested-With: XMLHttpRequest");
        $jsonData = file_get_contents("https://app.thebookingbutton.com/api/v1/properties/alarautaoydirect/rates.json?start_date=".$start_date."&end_date=".$end_date);
        echo $jsonData;
    }
} else {
    http_response_code(403);
};
?>
