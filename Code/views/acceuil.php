<!DOCTYPE html>
<html lang="fr" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Acceuil</title>
        <link rel="stylesheet" href="views/css/master.css">
    </head>
    <body>
        <header>
            <a id="logo" href="#">
                <img src="views/css/img/logo.png" alt="Logo du site" title="Retour à l'acceuil du site" width="150">
            </a>
            <div class="header_div">
                <a href="#">Create a game room &#10024;</a>
                <a href="#">How it works</a>
                <a href="#">Hand code &#9995;</a>
            </div>
            <div class="header_div">
                <a class="header_button" href="login.php">Log in</a>
                <a class="header_button" href="#">Sign up</a>
            </div>
        </header>
        <section id="main-body">
            <div class="body-left">
                <div id="left-content">
                    <h1 class="main-text">You too embark on the adventure and join a
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
                <img id="body-photo" src="views/css/img/main-image.png" alt="Carte troll" width="700">
            </div>
        </section>
        <footer>
                <p>Create by Imbert Antoine, Mezquita Fernández Pedro, Blouin Lukas, Clergue Valentin, Morel Mathieu</p>
                <a href="#">Contact</a>
                <a href="#">Terms of service</a>
                <a href="#">Credits</a>
        </footer>
    </body>
</html>
