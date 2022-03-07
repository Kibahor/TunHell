<html class="h-full p-0 m-0" lang="fr" dir="ltr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>&#128273; Login</title>
        <link href="views/dist/output.css" rel="stylesheet">
	</head>
    <body class="bg-fuchsia-200 flex flex-col font-Montserrat h-full m-0 p-0">
        <?php require_once("header.php") ?>
        <section class="main flex h-full justify-center items-center">
            <div class="flex">
                <div class="hidden lg:flex">
                    <img class="h-96 w-96 2xl:h-32 2xl:w-32 object-cover rounded-l-lg" src="views/rsc/dragon.jpg" alt="">
                </div>
                <div class ="bg-white rounded-r-lg flex flex-col items-center justify-center h-96 w-96 2xl:h-32 2xl:w-32 2xl:gap-y-1">
                    <h1 class="text-2xl font-bold">Profil</h1>
                    <ul>
                        <?php
                            echo '<li>avatar : '.$accountDisplay->getAvatar().'<il>';
                            echo '<li>pseudo : '.$accountDisplay->getPseudo().'<il>';
                            echo '<li>Date création compte : '.$accountDisplay->getCreationDate().'<il>';
                            echo '<li>nombre de games jouées : '.$accountDisplay->getNumbrerGames().'<il>';
                            echo '<li>nombre de victoires : '.$accountDisplay->getNumberVictoires().'<il>';
                         ?>
                    </ul>
                </div>


            </div>
        </section>
        <?php require_once("footer.php") ?>
    </body>
</html>
