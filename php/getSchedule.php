<?php
    include_once('config.php');
    $connection = dbConnect($hostname, $username, $password, $database);
    $query = "SELECT * FROM schedule17;";
    $result = queryDB($connection, $query);

    $schedule = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_object()) {
            $event;
            $event['title'] = $row->title;
            $event['type'] = $row->type;
            $event['description'] = $row->description;
            $event['day'] = $row->day;
            $event['duration'] = $row->duration;
            $event['location'] = $row->location;
            $event['locationlink'] = $row->locationlink;
            $event['signuplink'] = $row->signuplink;
            array_push($schedule, $event);
        }
    } else {
        echo "0 results";
    }
    echo json_encode($schedule);
    $connection->close();
?>
