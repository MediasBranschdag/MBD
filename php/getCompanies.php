<?php
    include_once('database.php');
    $dabaseModel = new DatabaseModel();
    $dabaseModel->establishDatabaseConnection();
    $result = $dabaseModel->dbSelectAllSimple(
        'SELECT * FROM companies', PDO::FETCH_ASSOC
    );
    echo json_encode($result);