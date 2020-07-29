<?php

    include_once('database.php');

    class DinnerPartyModel extends DatabaseModel {
        const SELECT_ATTRIBUTES = "*";

        public function __construct() {
            $this->establishDatabaseConnection();
        }

        /**
         * Getting all the events
         */
        public function addGuest() {

            $name = $_POST['name'];
            $personId = $_POST['personId'];
            $email = $_POST['email'];
            $type = $_POST['type'];
            $companyId = $_POST['companyId'];
            $starter = $_POST['starter'];
            $mainCourse = $_POST['mainCourse'];
            $dessert = $_POST['dessert'];
            $drinks = $_POST['drinks'];
            $allergies = $_POST['allergies'];
            $ticketPrice = $_POST['ticketPrice'];
            
            header('Access-Control-Allow-Origin: *');
            header('Content-Type: application/json');

            return $this->dbExecutePrepared(
                "INSERT INTO dinner_party_guests (name, personId, email, type, companyId, starter, mainCourse, dessert, drinks, allergies, ticketPrice)  
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [$name, $personId, $email, $type, $companyId, $starter, $mainCourse, $dessert, $drinks, $allergies, $ticketPrice]
            );
        }
    }

    class DinnerPartyController {

        public function init() {
            //Create model
            $eventModel = new DinnerPartyModel();

            //Check request
            switch ($_GET['action']) {
                case 'add-guest':
                    $data = $eventModel->addGuest();
                break;
            }

            echo json_encode($data);
        }
    }

    $controller = new DinnerPartyController();
    $controller->init();
?>