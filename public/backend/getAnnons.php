<?php

    include_once('database.php');

    class AdModel extends DatabaseModel {
        const SELECT_ATTRIBUTES = "*";

        public function __construct() {
            $this->establishDatabaseConnection();
        }

        /**
         * Getting all the events
         */
        public function getAllEvents() {
            return $this->dbSelectAllSimple(
                'SELECT * FROM annons19'
            );
        }
    }

    class AdController {

        public function init() {
            //Create model
            $adModel = new AdModel();

            //Check request
            switch ($_GET['action']) {
                case 'all-ads':
                    $data = $adModel->getAllEvents();
                break;
            }

            //Convert the data to json
            header('Content-Type: application/json');
            echo json_encode($data);
        }
    }

    $controller = new adController();
    $controller->init();
?>