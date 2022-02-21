<?php
    require_once(__DIR__."/config/config.php");

    include_once(__DIR__."/config/Autoload.php");
    Autoload::charger();

    session_start();
    $control = new FrontController();







?>
