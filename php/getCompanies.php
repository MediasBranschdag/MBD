<?php
    include_once('database.php');
    $dabaseModel = new DatabaseModel();
    $dabaseModel->establishDatabaseConnection();

    $whereSQL = '';
    $whereParam = array();

    // Get the start date
    if(isset($_GET['activeDate'])) {
        $whereSQL .= ' active_start <= DATE(:activeDate) AND active_end >= DATE(:activeDate)';
        $whereParam[':activeDate'] = date("Y-m-d", strtotime($_GET['activeDate']));
    }
    
    // Get exibitor or not
    if(isset($_GET['exhibitor'])) {
        $whereSQL = $whereSQL != '' ? $whereSQL  . ' AND ' : '';
        $whereSQL .= ' is_exhibitor = :exhibitor';
        $whereParam[':exhibitor'] = (int) $_GET['exhibitor'];
    }

    // Finishing the query and gettig the result
    $whereSQL = $whereSQL != '' ? 'WHERE ' . $whereSQL : '';
    $result = $dabaseModel->dbSelectAllPrepared(
        'SELECT * FROM companies ' . $whereSQL,
        $whereParam, PDO::FETCH_ASSOC
    );

    // Need to return array of no result is returned
    if(!$result) {
        $result = array();
    }

    // Converting the result into json to be used for js
    echo json_encode($result);