<?php

    include_once('database.php');
    include_once('Models/exhibitDateModel.php');
    require_once('./Models/teamModel.php');

    include 'googleConfig.php';

    class DinnerPartyModel extends DatabaseModel {

        public function __construct() {
            $this->establishDatabaseConnection();
            $this->exhibitDateModel = new ExhibitDateModel();
        }

        public function checkAccessToken() {
            $GOOGLE_CLIENT_ID = '1024658551909-qcnpdr83ismar6qg9nm5ok6irlohgks3.apps.googleusercontent.com';
            $token = $_GET['token'];

            $teamModel = new TeamModel();
            $team = $teamModel->getAllTeamMembers();

            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://oauth2.googleapis.com/tokeninfo?access_token=' . $token,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_HTTPHEADER => array(
                  'cache-control: no-cache'
                ),
              ));
              
              $response = json_decode(curl_exec($curl));
              $err = curl_error($curl);
              
              curl_close($curl);
              $email = $response->email;
              $aud = $response->aud;

              if($aud !== $GOOGLE_CLIENT_ID) {
                  return false;
              }
              $results = array_filter($team, function($item) use ($email) {
                  return ($item->email === $email);
              });
              return count($results) > 0 || $email === 'branschdag@medieteknik.com';
        }

        public function updateGoogleSheet() {
            header('Access-Control-Allow-Origin: *');

            $clearEndpoint = $_GET['clearEndpoint'];
            $putEndpoint = $_GET['putEndpoint'];
            $guestValues = json_decode($_POST['guestValues']);
            $token = $_GET['token'];

            $jsonData = array(
                'values' => $guestValues
            );
                
            $jsonDataEncoded = json_encode($jsonData);

            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => $clearEndpoint . '?key=' . $GOOGLE_API_KEY,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_HTTPHEADER => array(
                  'cache-control: no-cache',
                  'Authorization: Bearer ' . $token
                ),
              ));
              
            $response = json_decode(curl_exec($curl));
            $err = curl_error($curl);
            
            curl_close($curl);

            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => $putEndpoint . '?key=' . $GOOGLE_API_KEY . '&valueInputOption=RAW',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'PUT',
                CURLOPT_POSTFIELDS =>  $jsonDataEncoded,
                CURLOPT_HTTPHEADER => array(
                    'Content-Type: application/json',
                    'cache-control: no-cache',
                    'Authorization: Bearer ' . $token
                ),
            ));
              
            $response = json_decode(curl_exec($curl));
            $err = curl_error($curl);
            
            curl_close($curl);

            return $response;

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
            
            if($this->checkAccessToken()) {
                return $this->dbSelectAllSimple(
                    'SELECT 
                        guests.date,
                        guests.name,
                        guests.personId,
                        guests.email,
                        guests.type,
                        companies.name as company,
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
                    JOIN dinner_party_courses drinks ON guests.drinksId = drinks.id
                    ORDER BY guests.id'
                );
            } else {
                header('HTTP/1.1 401 Unauthorized');
                exit;
            }
        }

        public function updateDinnerParty() {
            if($this->checkAccessToken()) {
                $bookingStart = $_POST['bookingStart'];
                $bookingEnd = $_POST['bookingEnd'];
                $ticketBasePrice = $_POST['ticketBasePrice'];
                $alcoholPrice = $_POST['alcoholPrice'];
                $helperDiscount = $_POST['helperDiscount'];
                $googleSheetsId = $_POST['googleSheetsId'];
                $dinnerEventLink = $_POST['dinnerEventLink'];
                $afterpartyEventLink = $_POST['afterpartyEventLink'];

                $year = $_POST['year'];

                $response = $this->dbExecutePrepared(
                    'UPDATE dinner_parties SET 
                    bookingStart = ?, 
                    bookingEnd = ?, 
                    ticketBasePrice = ?,
                    alcoholPrice = ?,
                    helperDiscount = ?,
                    googleSheetsId = ?,
                    dinnerEventLink = ?,
                    afterpartyEventLink = ?
                    WHERE
                    year = ?',
                    [$bookingStart, $bookingEnd, $ticketBasePrice, $alcoholPrice, $helperDiscount, $googleSheetsId, $dinnerEventLink, $afterpartyEventLink, $year]
                );
                if($response) {
                    header('Access-Control-Allow-Origin: *');
                    header('Content-Type: application/json');
                } else {
                    header('HTTP/1.1 400 Bad Request');
                    exit;
                }
                return $response;

            } else {
                header('HTTP/1.1 401 Unauthorized');
                exit;
            }

        }

        /**
         * Adding guests
         */
        public function addGuest() {
            $date = $_POST['date'];
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

            $response = $this->dbExecutePrepared(
                'INSERT INTO dinner_party_guests (date, name, personId, email, type, companyId, starterId, mainCourseId, dessertId, drinksId, allergies, ticketPrice)  
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [$date, $name, $personId, $email, $type, $company, $starter, $mainCourse, $dessert, $drinks, $allergies, $ticketPrice]
            );
            if($response) {
                header('Access-Control-Allow-Origin: *');
                header('Content-Type: application/json');
            } else {
                header('HTTP/1.1 400 Bad Request');
                exit;
            }
            return $response;
        }
    }

    class DinnerPartyController {

        public function init() {
            //Create model
            $eventModel = new DinnerPartyModel();

            //Check request
            switch ($_GET['action']) {
                case 'update-dinner-party':
                    $data = $eventModel->updateDinnerParty();
                    break;
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
                case 'update-sheet':
                    $data = $eventModel->updateGoogleSheet();
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