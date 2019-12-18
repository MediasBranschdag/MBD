<?php
    require_once 'database.php';

    class ExhibitDateModel extends DatabaseModel {
        public function __construct() {
            $this->establishDatabaseConnection();
        }

        /**
         * Getting the year of the last year.
         * This is taken from the exhibit_dates
         * @return int The last year
         */
        public function getLastYear() {
            return $this->dbSelectSimple(
                'SELECT year
                FROM exhibit_dates
                ORDER BY date DESC
                LIMIT 1, 1', PDO::FETCH_COLUMN
            );
        }

        /**
         * Getting the year of the last year.
         * This is taken from the exhibit_dates
         * @return int The last year
         */
        public function getCurrentYear() {
            return $this->dbSelectSimple(
                'SELECT year
                FROM exhibit_dates
                ORDER BY date DESC
                LIMIT 1', PDO::FETCH_COLUMN
            );
        }
    }