<!DOCTYPE html>
<html lang="fr" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Login</title>
        <link rel="stylesheet" href="views/css/master.css">
    </head>
    <body>
        <header>
            <a id="logo" href="index.php">
                <img src="views/css/img/logo.png" alt="Logo du site" title="Retour à l'acceuil du site" width="150">
            </a>
            <div class="header_div">
                <a href="#">Create a game room &#10024;</a>
                <a href="#">How it works</a>
                <a href="#">Hand code &#9995;</a>
            </div>
            <div class="header_div">
                <a class="header_button" href="index.php?action=connection">Log in</a>
                <a class="header_button" href="index.php?action=creerCompte">Sign up</a>
            </div>
        </header>
        <section class="form_login_sign">
            <?php
                foreach ($tabErreur as $row){
                    echo 'Erreur : '.$row;
                }
             ?>
        </section>
        <footer>
                <p>Create by Imbert Antoine, Mezquita Fernandez Pedro, Blouin Lukas, Clergue Valentin, Morel Mathieu</p>
                <a href="#">Contact</a>
                <a href="#">Terms of service</a>
                <a href="#">Credits</a>
        </footer>
    </body>
</html>
