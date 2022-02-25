<!DOCTYPE html>
<html lang="fr" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>&#128273; Login</title>
        <link rel="stylesheet" href="views/css/master.css">
    </head>
    <body>
        <?php require("header.php") ?>
        <section class="form_login_sign">
            <div class="div_login">
                <form class="form_log" action="index.php?action=login" method="POST">
                    <h1>Log-in</h1>
                    <?php
                        if(isset($err) && $err == "err auth"){
                            echo '<p>le pseudo ou le mot de passe est incorrecte</p>';
                        }
                     ?>
                    <div class ="log_field">
                        <input class="field" type="text" name="pseudo" placeholder="Pseudo" required autofocus>
                    </div>
                    <?php
                        if(isset($empty_username) && $empty_username == true){
                            echo '<p>le pseudo ne peut pas être vide</p>';
                        }
                        if(isset($invalid_username) && $invalid_username == true){
                            echo '<p>le pseudo est invalide, il doit contenir entre 1 et 25 charactères</p>';
                        }
                     ?>
                    <div class ="log_field">
                        <input class="field" type="password" name="password" placeholder="Password" required>
                    </div>
                    <?php
                        if(isset($empty_password) && $empty_password == true){
                            echo '<p>le mot de passe ne peut pas être vide</p>';
                        }
                        if(isset($invalid_password) && $invalid_password == true){
                            echo '<p>Un mot de passe valide aura<br>
                                    - de 8 à 20 caractères<br>
                                    - au moins une lettre minuscule<br>
                                    - au moins une lettre majuscule<br>
                                    - au moins un chiffre<br>
                                    - au moins un de ces caractères spéciaux: $ @ % * + - _ !<br>
                                    - aucun autre caractère possible: pas de & ni de { par exemple)</p>';
                        }
                     ?>
                    <div class ="log_field">
                        <input class="header_button" type="submit" value="Se connecter" name="subbutton">
                    </div>
                </form>
                <p>
                    Don't have an account ?
                    <a href="index.php?action=viewSign">Sign up</a>
                </p>
            </div>
        </section>
        <?php require("footer.php") ?>
    </body>
</html>
