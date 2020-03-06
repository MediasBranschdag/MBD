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
                strtr(
                    'SELECT 
                        %select
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
                        ASC',
                    array(
                        "%select" => TeamModel::SELECT_ATTRIBUTES
                    )
                )
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