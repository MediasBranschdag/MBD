<?php
    include_once('config.php');
    $connection = dbConnect($hostname, $username, $password, $database);
    $query = "SELECT * FROM annons19;";
    $result = queryDB($connection, $query);

    $ads = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_object()) {
            $ad;
            $ad['title'] = $row->title;
            $ad['id'] = $row->id;
            $ad['description'] = $row->description;
            $ad['image'] = $row->image;
            array_push($ads, $ad);
        }
    }
    echo json_encode($ads);
    $connection->close();
?>
