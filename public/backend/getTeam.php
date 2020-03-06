<?php

    require_once('database.php');
    require_once('./Models/teamModel.php');
    require_once('./devConfig.php');

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