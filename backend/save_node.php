<?php

require_once 'DbTableNodes.php';

$request = $_REQUEST;

$id = $request['id'];
$data = array(
	'name' => $request['name'],
	'text' => $request['text']
);

$table = new CDbTableNodes();
$table->UpdateRow($data, $id);

die( enHelper::CreateOutput('success') );
