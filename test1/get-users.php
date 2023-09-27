<?php
require_once 'db.php';

$sql = "SELECT * FROM workers";

$stmt = $mysqli->prepare($sql);
$stmt->execute();
$result = $stmt->get_result();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>ID</th>";
echo "<th>Name</th>";
echo "<th>City</th>";
echo "</tr>";

foreach ($result as $row) {
    echo "<tr>";
    echo "<td>" . $row['ID'] . "</td>";
    echo "<td>" . $row['Name'] . "</td>";
    echo "<td>" . $row['City'] . "</td>";
    echo "</tr>";
}
echo "</table>";
?>