<?php

    include_once('database.php');

    class TeamModel extends DatabaseModel {
        const SELECT_ATTRIBUTES = "*";

        public function __construct() {
            $this->establishDatabaseConnection();
        }

        /**
         * Getting all the team members
         */
        public function getAllTeamMembers() {
            return $this->dbSelectAllSimple(
                'SELECT 
                    ' . TeamModel::SELECT_ATTRIBUTES . '
                FROM 
                    team20 
                ORDER BY
                    CASE position
                        WHEN "Företagssamordnare" THEN 1
                        WHEN "Företagsansvarig" THEN 2
                        WHEN "Projektledare" THEN 3
                        ELSE 4
                    END,
                    position
                    ASC'
            );
        }

        /**
         * Getting only the team mebers that is responsable of all the companies
         */
        public function getCompanyResponsible() {
            return $this->dbSelectAllSimple(
                'SELECT 
                    ' . TeamModel::SELECT_ATTRIBUTES . '
                FROM 
                    team20 
                WHERE
                    position = "Företagsansvarig" OR
                    position = "Företagssamordnare"
                ORDER BY
                    position, name'
            );
        }
    }

    class TeamController {

        public function init() {
            //Create model
            $teamModel = new TeamModel();

            //Check request
            switch ($_GET['action']) {
                case 'company-responsible':
                    $data = $teamModel->getCompanyResponsible();
                break;
                
                default:
                    $data = $teamModel->getAllTeamMembers();
                    break;
            }

            //Convert the data to json
            header('Content-Type: application/json');
            echo json_encode($data);
        }
    }

    $controller = new TeamController();
    $controller->init();
?>
