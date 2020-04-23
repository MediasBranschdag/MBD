<?php
    include_once('database.php');
    include_once('Models/exhibitDateModel.php');

    class TeamModel extends DatabaseModel {
        const SELECT_ATTRIBUTES = "*";

        public function __construct() {
            $this->establishDatabaseConnection();
            $this->exhibitDateModel = new ExhibitDateModel();
        }

        /**
         * Getting all the team members.
         * We use a custom order depending on position, se below
         */
        public function getAllTeamMembers() {
            $currentYear = $this->exhibitDateModel->getCurrentYear();
            return $this->dbSelectAllSimple(
                strtr(
                    'SELECT 
                        %select
                    FROM 
                        team_involvement ti INNER JOIN
                        persons per ON ti.personId = per.id INNER JOIN
                        positions pos ON ti.positionId = pos.id
                    WHERE
                        ti.year = currentYear
                    ORDER BY
                        pos.priority,
                        pos.desc_se
                        ASC',
                    array(
                        "%select" => TeamModel::SELECT_ATTRIBUTES,
                        "currentYear" => $currentYear
                    ),
                )
            );
        }

        /**
         * Getting only the team mebers that is responsable of all the companies
         */
        public function getCompanyResponsible() {
            $currentYear = $this->exhibitDateModel->getCurrentYear();
            return $this->dbSelectAllSimple(
                'SELECT 
                    ' . TeamModel::SELECT_ATTRIBUTES . '
                FROM 
                    team_involvement ti INNER JOIN
                    persons per ON ti.personId = per.id INNER JOIN
                    positions pos ON ti.positionId = pos.id
                WHERE
                    ti.year = ' . $currentYear . ' AND
                    pos.id IN (2, 3)
                ORDER BY
                    pos.priority ASC'
            );
        }
    }