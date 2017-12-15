<?php

$dbConf = array(
	'host' => '127.0.0.1',
	'port' => '3306',
	'name' => 'model',
	'user' => 'root',
	'password' => 'k7jez3TRew'
);

define('LOG_ERROR', 1);
define('LOG_GENERAL', 2);
$logFiles = array(
	LOG_ERROR	=> 'logs/error.log',
	LOG_GENERAL	=> 'logs/general.log'
);

define('DOCUMENT_ROOT', $_SERVER['DOCUMENT_ROOT'] . '/');
define('WWW_ROOT', 'http://54.234.133.78/');

error_reporting(E_ALL);
ini_set('display_errors', 1);