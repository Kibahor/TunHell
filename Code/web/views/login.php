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
                    <div class ="log_field">
                        <input class="field" type="text" name="pseudo" placeholder="Pseudo" required autofocus>
                    </div>
                    <div class ="log_field">
                        <input class="field" type="password" name="password" placeholder="Password" required>
                    </div>
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
