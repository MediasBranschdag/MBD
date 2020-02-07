<?php

    include_once('database.php');

    class TeamModel extends DatabaseModel {
        const SELECT_ATTRIBUTES = "*";

        public function __construct() {
            $this->establishDatabaseConnection();
        }

        /**
         * Getting all the team members.
         * We use a custom order depending on position, se below
         */
        public function getAllTeamMembers() {
            return $this->dbSelectAllSimple(
                'SELECT 
                    ' . TeamModel::SELECT_ATTRIBUTES . '
                FROM 
                    team20 
                ORDER BY
                    CASE position_se
                        WHEN "Projektledare" THEN 1
                        WHEN "Företagssamordnare" THEN 2
                        WHEN "Företagsansvarig" THEN 3
                        WHEN "Sittningsansvarig" THEN 4
                        ELSE 5
                    END,
                    position_se
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
                    position_se = "Företagsansvarig" OR
                    position_se = "Företagssamordnare"
                ORDER BY
                    position_se DESC, name'
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
