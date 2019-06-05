<?php
    include_once('config.php');
    $connection = dbConnect($hostname, $username, $password, $database);
    $query = "SELECT * FROM companies19;";
    $result = queryDB($connection, $query);

    $companies = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_object()) {
            $company;
            $company['id'] = $row->id;
            $company['name'] = $row->name;
            $company['description'] = $row->description;
            $company['website'] = $row->website;
            $company['logo'] = $row->logo;
            $company['main_sponsor'] = $row->main_sponsor;
            array_push($companies, $company);
        }
    }
    echo json_encode($companies);
    $connection->close();
?>
