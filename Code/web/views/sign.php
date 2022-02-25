<!DOCTYPE html>
<html lang="fr" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>&#9997; Sign-up</title>
        <link rel="stylesheet" href="views/css/master.css">
    </head>
    <body>

        <?php require("header.php") ?>

        <section class="form_login_sign">
            <div class="div_login">
                <form class="form_log" action="index.php?action=signup" method="POST">
                    <h1>Create Account</h1>
                    <?php
                        if(isset($err) && $err == "err auth"){
                            echo '<p>erreur lors de la création du compte, veuillez recommencer</p>';
                        }
                     ?>
                    <div class ="log_field">
                        <input class="field" type="text" name="pseudo" placeholder="Your pseudo" required autofocus>
                    </div>
                    <?php
                        if(isset($empty_username) && $empty_username == true){
                            echo '<p>le pseudo ne peut pas être vide</p>';
                        }
                        if(isset($invalid_username) && $invalid_username == true){
                            echo '<p>le pseudo est invalide, il doit contenir entre 1 et 25 charactères</p>';
                        }
                        if(isset($exist_username) && $exist_username == true){
                            echo '<p>le pseudo est déjà utilisé</p>';
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
                        <input class="field" type="password" name="confirmpassword" placeholder="Password" required>
                    </div>
                    <?php
                        if(isset($w_cpassword) && $w_cpassword == true){
                            echo '<p>le mot de passe de confirmation ne correspond pas</p>';
                        }
                     ?>
                    <div class ="log_field">
                        <input class="header_button" type="submit" value="Create an account" name="subbutton">
                    </div>
                </form>
                <p>
                    Already have an account ?
                    <a href="index.php?action=viewLog">Log in</a>
                </p>
            </div>
        </section>

        <?php require("footer.php") ?>

    </body>
</html>
