<?php
require_once 'db.php';

$sql = "SELECT ID, Name, City FROM workers WHERE ID = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $name, $city);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>ID</th>";
echo "<th>Name</th>";
echo "<th>City</th>";
echo "</tr>";
echo "<tr>";
echo "<td>" . $id . "</td>";
echo "<td>" . $name . "</td>";
echo "<td>" . $city . "</td>";
echo "</tr>";
echo "</table>";
?>