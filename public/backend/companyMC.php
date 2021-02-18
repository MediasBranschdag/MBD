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
    public function getCurrentYearExhibitorsFromSearch($searchString) {
        $currentYear = $this->exhibitDateModel->getCurrentYear();
        return $this->dbSelectAllPrepared(
            $this->getExhibitorSQLString() . 
            'WHERE 
                ci.year = ' . $currentYear . ' AND
                ci.isExhibitor = 1 AND
                name LIKE ?', array('%' . $searchString . '%')
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
     * Getting all the companies that is an exhibitor for 
     * the latest year
     */
    public function getCurrentYearExhibitor() {
        $currentYear = $this->exhibitDateModel->getCurrentYear();
        return $this->dbSelectAllSimple(
            $this->getExhibitorSQLString() . 
            'WHERE 
                ci.year = ' . $currentYear . ' AND
                ci.isExhibitor = 1'
        );
    }


    /**
     * Get company data from a given year
     * @param int $year The year that the companies was active in
     */
    private function getCompanies($year) {
        return $this->dbSelectAllSimple(
            $this->getExhibitorSQLString() .
            'WHERE ci.year = ' . $year
        );
    }

    /**
     * Getting the basic attributes for exhibitors when doing an
     * sql query
     */
    private function getExhibitorSQLString() {
        return 'SELECT
        c.*,
        ci.isSponsor,
        ci.isExhibitor,
        ci.isMainSponsor,
        ci.isLecturer,
        ci.seekingDescription_en,
        ci.seekingDescription_se,
        cmp.mapPositionY,
        cmp.mapPositionX,
        cmp.customOrder AS mapOrder,
        CONCAT(\'[\', array.employmentsArray, \']\') AS employmentsArray
        FROM 
          companies AS c INNER JOIN 
          company_involvement ci ON ci.companyID = c.ID LEFT JOIN 
          company_map_position AS cmp ON cmp.companyID = ci.companyID AND cmp.year = ci.year LEFT JOIN
            (
            SELECT
                ce.year,
                ce.companyId,
                GROUP_CONCAT(DISTINCT CONCAT(\'{ "id": \', e.ID, \', "priority": \', e.priority, \', "name": { "se":"\', e.desc_se, \'", "en": "\', e.desc_en, \'"}}\')) AS employmentsArray 
            FROM 
                company_employments ce INNER JOIN
                employments e ON ce.employmentID = e.Id
            GROUP BY
                ce.year,
                ce.companyId
            ) array ON ci.year = array.year AND ci.companyId = array.companyId ';
    }
}

class CompanyController {

    public function init() {
        header("Access-Control-Allow-Origin: *");

        //Create model
        $companyModel = new CompanyModel();

        //Check request
        switch ($_GET['action']) {
            case 'search-current-year-exhibitor':
                $searchString = $_GET['q'];
                if($searchString == '') {
                    $data = $companyModel->getCurrentYearExhibitor();
                }
                else {
                    $data = $companyModel->getCurrentYearExhibitorsFromSearch($searchString);
                }
                break;

            case 'current-year-exhibitor':
                $data = $companyModel->getCurrentYearExhibitor();
                break;

            case 'current-year-involvement':
                $data = $companyModel->getCurrentYearInvolvement();
                break;

            case 'last-year-involvement':
                $data = $companyModel->getLastYearInvolvement();
                break;
        }

        header('Content-Type: application/json');
        echo json_encode($data);
    }
}

$controller = new CompanyController();
$controller->init();