<?php
    include_once('config.php');
    $connection = dbConnect($hostname, $username, $password, $database);
    $query = "SELECT * FROM events19;";
    $result = queryDB($connection, $query);

    $events = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_object()) {
            $event;
            $event['title'] = $row->title;
            $event['type'] = $row->type;
            $event['description'] = $row->description;
            $event['date'] = $row->date;
            $event['time'] = $row->time;
            $event['location'] = $row->location;
            $event['fb_link'] = $row->fb_link;
            $event['image'] = $row->image;
            $event['show'] = $row->show;
            array_push($events, $event);
        }
    } else {
        echo "0 results";
    }
    echo json_encode($events);
    $connection->close();
?>
