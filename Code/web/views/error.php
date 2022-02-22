<!DOCTYPE html>
<html lang="fr" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Login</title>
        <link rel="stylesheet" href="views/css/master.css">
    </head>
    <body>
        <?php require("header.php") ?>
        <section class="form_login_sign">
            <?php
                foreach ($tabErreur as $row){
                    echo 'Erreur : '.$row;
                }
             ?>
        </section>
        <?php require("footer.php") ?>
    </body>
</html>
