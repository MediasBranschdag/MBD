<?php

    include_once('database.php');
    include_once('Models/exhibitDateModel.php');

    class DinnerPartyModel extends DatabaseModel {
        const SELECT_ATTRIBUTES = "*";

        public function __construct() {
            $this->establishDatabaseConnection();
            $this->exhibitDateModel = new ExhibitDateModel();
        }

        public function getDinnerParty() {
            $currentYear = $this->exhibitDateModel->getCurrentYear();
            header('Access-Control-Allow-Origin: *');
            
            return $this->dbSelectSimple(
                'SELECT * FROM dinner_parties WHERE year = ' . $currentYear 
            );
        }

        public function getCourses() {
            $currentYear = $this->exhibitDateModel->getCurrentYear();
            header('Access-Control-Allow-Origin: *');
            header('Content-Type: application/json');
            
            return $this->dbSelectAllSimple(
                'SELECT * FROM dinner_party_courses WHERE year = ' . $currentYear
            );
        }

        /**
         * Getting all the events
         */
        public function addGuest() {

            $name = $_POST['name'];
            $personId = $_POST['personId'];
            $email = $_POST['email'];
            $type = $_POST['type'];
            $company = $_POST['company'];
            $starter = $_POST['starter'];
            $mainCourse = $_POST['mainCourse'];
            $dessert = $_POST['dessert'];
            $drinks = $_POST['drinks'];
            $allergies = $_POST['allergies'];
            $ticketPrice = $_POST['ticketPrice'];
            
            header('Access-Control-Allow-Origin: *');
            header('Content-Type: application/json');

            return $this->dbExecutePrepared(
                "INSERT INTO dinner_party_guests (name, personId, email, type, companyId, starterId, mainCourseId, dessertId, drinksId, allergies, ticketPrice)  
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [$name, $personId, $email, $type, $company, $starter, $mainCourse, $dessert, $drinks, $allergies, $ticketPrice]
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
                case 'get-courses':
                    $data = $eventModel->getCourses();
                    break;
                default:
                    $data = $eventModel->getDinnerParty();
                    break;
                break;
            }

            echo json_encode($data);
        }
    }

    $controller = new DinnerPartyController();
    $controller->init();
?>