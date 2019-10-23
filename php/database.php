<?php
require_once 'config.php';
class DatabaseModel {

    /**
     * @var PDO
     */
    static private $staticDB;

    /**
     * @var PDO
     */
    public $db;


    /**
     * Connectiong to the database.
     */
    public function establishDatabaseConnection() {
        if(isset(self::$staticDB)) {
            $this->db = self::$staticDB;
            return false;
        }
        self::$staticDB = new PDO(
            'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8', 
            DB_USERNAME, 
            DB_PASSWORD
        );
        $this->db = self::$staticDB;
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }
    

    /**
     * Selecting a data from a query direclty.
     * @param string $sql The sql to run.
     * @param int The fetch type, how the data is to be returned.
     */
    public function dbSelectAllSimple($sql, $fetchType = PDO::FETCH_OBJ) {
        $result = array();
        $stmt = self::$staticDB->query($sql);
        if($stmt) {
            while($row = $stmt->fetch($fetchType)) {
                array_push($result, $row);
            }
        }
        else {
            return false;
        }

        if(count($result) == 0) {
            return false;
        } 

        return $result;
    }


    /**
     * Selecting data from a prepared
     * @param string $sql The sql to run.
     * @param array $data The data to be used in the sql.
     * @param int $fetchType The fetch type.
     */
    public function dbSelectAllPrepared($sql, $data, $fetchType = PDO::FETCH_OBJ) {
        $stmt = self::$staticDB->prepare($sql);
        $stmt->execute($data);
        $result = $stmt->fetchAll($fetchType);

        if(count($result) == 0) {
            return false;
        }

        return $result;
    }


    /**
     * Selecting data from a prepared
     * @param string $sql The sql to run.
     * @param array $data The data to be used in the sql.
     * @param int $fetchType The fetch type.
     */
    public function dbSelectPrepared($sql, $data, $fetchType = PDO::FETCH_OBJ) {
        $result = $this->dbSelectAllPrepared($sql, $data, $fetchType);
        if($result) {
            return $result[0];
        }
        else {
            return false;
        }
    }


    /**
     * Makes a prepared execute statement
     * @param string $sql The SQL for the query.
     * @param array $data The data for the $sql.
     */
    public function dbExecutePrepared($sql, $data = null) {
        $stmt = self::$staticDB->prepare($sql);
        $stmt->execute($data);
    }


    /**
     * Makes a simple sql execute
     * @param string $sql The SQL for the query.
     */
    public function dbExecuteSimple($sql) {
        self::$staticDB->query($sql);
    }
}
?>