<?php

$rep = __DIR__.'/../'; //repertoire racine

$base = 'mysql:host=localhost;dbname=DB_Tunhell_Accounts'; //BDD
$user = 'DB_Tunhell';
$mdp = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; //voir lors la phase de pentest si ceci doit etre chiffré
//$user = 'root';
//$mdp = 'root';

$vues = array(
    'acceuil' => 'views/src/acceuil.php',
    'login' => 'views/src/login.php',
    'sign' => 'views/src/sign.php',
    'documentation' => 'views/src/documentation.php',
    'contact' => 'views/src/contact.php', 
    'rgpd' => 'views/src/tos.php',
    'profil' => 'views/src/profil.php',
    'tos' => 'views/src/tos.php',
    'under_construction' => 'views/src/under_construction.php'
);
?>