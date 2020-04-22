<?php

@require_once "./Models/exhibitDateModel.php";

class DateController {

public function init() {
    header("Access-Control-Allow-Origin: *");
    //Create model
    $dateModel = new ExhibitDateModel();

    //Check request
    switch ($_GET['action']) {
        case 'next-exhibit-date':
            $data = $dateModel->getNextExhibitDate();
        break;
    }

    //Convert the data to json
    header('Content-Type: application/json');
    echo json_encode($data);
}
}

$controller = new DateController();
$controller->init();