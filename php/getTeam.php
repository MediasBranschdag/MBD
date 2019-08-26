<?php
    include_once('config.php');
    $connection = dbConnect($hostname, $username, $password, $database);
    $query = "SELECT * FROM team20 ORDER BY position, name";
    $result = queryDB($connection, $query);

    $team = array();
    sort($team);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_object()) {
            $teamMember;
            $teamMember['name'] = $row->name;
            $teamMember['position'] = $row->position;
            $teamMember['email'] = $row->email;
            $teamMember['image'] = $row->image;
            $teamMember['linkedin'] = $row->linkedin;
            array_push($team, $teamMember);
        }
    } else {
        echo "0 results";
    }
    echo json_encode($team);
    $connection->close();
?>
