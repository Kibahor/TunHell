<?php

$rep = __DIR__.'/../'; //repertoire racine

$base = 'mysql:host=localhost;dbname=DB_Tunhell_Accounts'; //BDD
$user = 'DB_Tunhell';
$mdp = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; //voir lors la phase de pentest si ceci doit etre chiffré
//$user = 'root';
//$mdp = 'root';

$vues = array(
    'acceuil' => 'views/acceuil.php',
    'login' => 'views/login.php',
    'sign' => 'views/sign.php',
    'error' => 'views/error.php'
);
?>
