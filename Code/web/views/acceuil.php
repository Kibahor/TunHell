<!DOCTYPE html>
<html lang="fr" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>&#127968; Homepage</title>
        <link rel="stylesheet" href="views/css/master.css">
    </head>
    <body>
        <?php require("header.php") ?>
        <section id="main-body">
            <div class="body-left">
                <div id="left-content">
                    <h1 class="main-text">Embark on the adventure and join a
                        <a href="#">game of TunHell!</a>
                    </h1>
                    <p>Just enter the
                        <a href="#">game code</a>
                        in the field below.
                    </p>
                    <form class="" action="acceuil.html" method="post">
                        <input class="field" type="text" name="game_code" value="">
                        <input class="header_button" type="submit" name="" value="Join">
                    </form>
                </div>
            </div>
            <div class="body-right">
                <img id="body-photo" src="views/css/img/main-image.png" alt="Lot de cartes" width="700">
            </div>
        </section>
        <?php require("footer.php") ?>
    </body>
</html>
