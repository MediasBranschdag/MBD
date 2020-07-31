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
        
        public function getCourseStats() {
            $currentYear = $this->exhibitDateModel->getCurrentYear();
            header('Access-Control-Allow-Origin: *');
            header('Content-Type: application/json');
            
            return $this->dbSelectAllSimple(
                'SELECT 
                course.id,
                course.year,
                course.type,
                course.desc_se,
                course.desc_en,
                course.attributes_se,
                course.attributes_en,
                COUNT(*) AS quantity
            FROM
                dinner_party_guests guests INNER JOIN
                dinner_party_courses course ON guests.starterId = course.id
            GROUP BY
                course.id,
                course.year,
                course.type,
                course.desc_se,
                course.desc_en,
                course.attributes_se,
                course.attributes_en
            UNION
            SELECT 
                course.id,
                course.year,
                course.type,
                course.desc_se,
                course.desc_en,
                course.attributes_se,
                course.attributes_en,
                COUNT(*) AS quantity
            FROM
                dinner_party_guests guests INNER JOIN
                dinner_party_courses course ON guests.mainCourseId = course.id
            GROUP BY
                course.id,
                course.year,
                course.type,
                course.desc_se,
                course.desc_en,
                course.attributes_se,
                course.attributes_en
            UNION
            SELECT 
                course.id,
                course.year,
                course.type,
                course.desc_se,
                course.desc_en,
                course.attributes_se,
                course.attributes_en,
                COUNT(*) AS quantity
            FROM
                dinner_party_guests guests INNER JOIN
                dinner_party_courses course ON guests.dessertId = course.id
            GROUP BY
                course.id,
                course.year,
                course.type,
                course.desc_se,
                course.desc_en,
                course.attributes_se,
                course.attributes_en
            UNION
            SELECT 
                course.id,
                course.year,
                course.type,
                course.desc_se,
                course.desc_en,
                course.attributes_se,
                course.attributes_en,
                COUNT(*) AS quantity
            FROM
                dinner_party_guests guests INNER JOIN
                dinner_party_courses course ON guests.drinksId = course.id
            GROUP BY
                course.id,
                course.year,
                course.type,
                course.desc_se,
                course.desc_en,
                course.attributes_se,
                course.attributes_en'
            );
        }

        public function getAllergies() {
            $currentYear = $this->exhibitDateModel->getCurrentYear();
            header('Access-Control-Allow-Origin: *');
            header('Content-Type: application/json');
            
            return $this->dbSelectAllSimple(
                'SELECT DISTINCT allergies
                FROM dinner_party_guests guests 
                WHERE guests.allergies IS NOT NULL AND
                guests.allergies <> ""'
            );
        }

        public function getGuestStats() {
            header('Access-Control-Allow-Origin: *');
            header('Content-Type: application/json');
            
            return $this->dbSelectAllSimple(
                'SELECT guests.type, COUNT(*) as quantity FROM dinner_party_guests guests GROUP BY guests.type'
            );
        }

        public function getCompanyStats() {
            header('Access-Control-Allow-Origin: *');
            header('Content-Type: application/json');
            
            return $this->dbSelectAllSimple(
                'SELECT companies.name, COUNT(*) as quantity FROM dinner_party_guests guests JOIN companies ON guests.companyId = companies.id GROUP BY companies.name'
            );
        }

        public function getGuests() {
            header('Access-Control-Allow-Origin: *');
            header('Content-Type: application/json');
            
            return $this->dbSelectAllSimple(
                'SELECT 
                    guests.id,
                    guests.name,
                    guests.personId,
                    guests.email,
                    guests.type,
                    companies.name,
                    starter.desc_se AS starter_se,
                    starter.desc_en AS starter_en,
                    mainCourse.desc_se AS mainCourse_se,
                    mainCourse.desc_en AS mainCourse_en,
                    dessert.desc_se AS dessert_se,
                    dessert.desc_en AS dessert_en,
                    drinks.desc_se AS drinks_se,
                    drinks.desc_en AS drinks_en,
                    guests.allergies,
                    guests.ticketPrice
                FROM dinner_party_guests guests
                LEFT JOIN companies ON guests.companyId = companies.id
                JOIN dinner_party_courses starter ON guests.starterId = starter.id
                JOIN dinner_party_courses mainCourse ON guests.mainCourseId = mainCourse.id
                JOIN dinner_party_courses dessert ON guests.dessertId = dessert.id
                JOIN dinner_party_courses drinks ON guests.drinksId = drinks.id'
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
                case 'get-guests':
                    $data = $eventModel->getGuests();
                    break;
                case 'get-courses':
                    $data = $eventModel->getCourses();
                    break;
                case 'get-course-stats':
                    $data = $eventModel->getCourseStats();
                    break;
                case 'get-guest-stats':
                    $data = $eventModel->getGuestStats();
                    break;
                case 'get-company-stats':
                    $data = $eventModel->getCompanyStats();
                    break;
                case 'get-allergies':
                    $data = $eventModel->getAllergies();
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