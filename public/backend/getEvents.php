<?php

    include_once('database.php');

    class EventModel extends DatabaseModel {
        const SELECT_ATTRIBUTES = "*";

        public function __construct() {
            $this->establishDatabaseConnection();
        }

        /**
         * Getting all the events
         */
        public function getAllEvents() {
            return $this->dbSelectAllSimple(
                'SELECT * FROM events
                ORDER BY date DESC'
            );
        }
    }

    class EventController {

        public function init() {
            //Create model
            $eventModel = new EventModel();
            
            header("Access-Control-Allow-Origin: *");

            //Check request
            switch ($_GET['action']) {
                case 'all-events':
                    $data = $eventModel->getAllEvents();
                break;
            }

            //Convert the data to json
            header('Content-Type: application/json');
            echo json_encode($data);
        }
    }

    $controller = new EventController();
    $controller->init();
?>