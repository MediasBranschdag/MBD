<?php

include_once('database.php');

class CompanyModel extends DatabaseModel {
    const SELECT_ATTRIBUTES = "*";

    public function __construct() {
        $this->establishDatabaseConnection();
    }

    /**
     * Getting companies from a given search string
     * @param string $searchString
     * @return object[]
     */
    public function getCompaniesFromSearch($searchString) {
        return $this->dbSelectAllPrepared(
            'SELECT ' . CompanyModel::SELECT_ATTRIBUTES . '
            FROM companies
            WHERE name LIKE ?', array('%' . $searchString . '%')
        );
    }

    /**
     * Getting all the active companies
     * @return object[] All the companies
     */
    public function getAllActiveCompanies() {
        return $this->dbSelectAllPrepared(
            'SELECT ' . CompanyModel::SELECT_ATTRIBUTES . '
            FROM companies', array()
        );
    }
}

class CompanyController {

    public function init() {
        //Create model
        $companyModel = new CompanyModel();

        //Check request
        switch ($_GET['action']) {
            case 'search':
                $searchString = $_GET['q'];
                if($searchString == '') {
                    $data = $companyModel->getAllActiveCompanies();
                }
                else {
                    $data = $companyModel->getCompaniesFromSearch($searchString);
                }
                break;

            case 'all-active':
                $data = $companyModel->getAllActiveCompanies();
                break;
            
            default:
                # code...
                break;
        }

        header('Content-Type: application/json');
        echo json_encode($data);
    }
}

$controller = new CompanyController();
$controller->init();