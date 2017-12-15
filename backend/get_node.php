<?php

require_once 'DbTableNodes.php';

$request = $_REQUEST;
$id = (int)$request['id'];

$table = new CDbTableNodes();
$data = $table->SelectRow($id);

die( enHelper::CreateOutput($data) );