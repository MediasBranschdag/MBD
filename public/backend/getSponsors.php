<?php
    include_once('config.php');
    $connection = dbConnect($hostname, $username, $password, $database);
    $query = "SELECT * FROM sponsors19;";
    $result = queryDB($connection, $query);

    $sponsors = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_object()) {
            $sponsor;
            $sponsor['id'] = $row->id;
            $sponsor['logo'] = $row->logo;
            $sponsor['website'] = $row->website;
            array_push($sponsors, $sponsor);
        }
    }
    echo json_encode($sponsors);
    $connection->close();
?>
