<?php
require_once(__DIR__."/config/config.php");

include_once(__DIR__."/config/Autoload.php");
Autoload::charger();

error_reporting(E_ALL ^ E_NOTICE);
$control = new FrontController();







?>