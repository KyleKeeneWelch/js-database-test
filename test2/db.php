<?php
$mysqli = new mysqli('localhost','root','', 'jsdatabasetest');
if ($mysqli->connect_error) {
  exit('Could not connect');
}
?>