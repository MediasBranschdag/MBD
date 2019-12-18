<?php

include_once('database.php');
include_once('Models/exhibitDateModel.php');

class CompanyModel extends DatabaseModel {

    /**
     * @var ExhibitDateModel
     */
    private $exhibitDateModel;

    
    public function __construct() {
        $this->establishDatabaseConnection();
        $this->exhibitDateModel = new ExhibitDateModel();
    }


    /**
     * Getting companies from a given search string
     * @param string $searchString
     * @return object[]
     */
    public function getCompaniesFromSearch($searchString) {
        return $this->dbSelectAllPrepared(
            'SELECT *
            FROM companies
            WHERE name LIKE ?', array('%' . $searchString . '%')
        );
    }


    /**
     * Getting all the active companies
     * @return object[] All the companies
     */
    public function getCurrentYearInvolvement() {
        // Getting the last years date
        $currentYear = $this->exhibitDateModel->getCurrentYear();
        return $this->getCompanies($currentYear);
    }


    /**
     * Getting the last years companies that where
     * involvement in MBD
     */
    public function getLastYearInvolvement() {
        $lastYear = $this->exhibitDateModel->getLastYear();
        return $this->getCompanies($lastYear);
    }


    /**
     * Get company data from a given year
     * @param int $year The year that the companies was active in
     */
    private function getCompanies($year) {
        return $this->dbSelectAllSimple(
            'SELECT 
                companies.*,
                ci.isSponsor, ci.isExhibitor, ci.isMainSponsor
            FROM companies
            LEFT JOIN company_involvement AS ci ON ci.companyID = companies.ID
            WHERE ci.year = ' . $year
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
                    $data = $companyModel->getCurrentYearInvolvement();
                }
                else {
                    $data = $companyModel->getCompaniesFromSearch($searchString);
                }
                break;

            case 'current-year-involvement':
                $data = $companyModel->getCurrentYearInvolvement();
                break;

            case 'last-year-involvement':
                $data = $companyModel->getLastYearInvolvement();
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