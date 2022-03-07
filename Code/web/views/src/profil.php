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
                <form class ="bg-white rounded-r-lg flex flex-col items-center justify-center h-96 w-96 2xl:h-32 2xl:w-32 2xl:gap-y-1" action="index.php?action=login" method="POST">
                    <h1 class="text-2xl font-bold">Log-in</h1>

                    <label for="pseudo" class="mt-5 text-xs">Pseudo : </label>
                    <input name="pseudo" type="text">
                    <label for="password" class="mt-3 text-xs">Password : </label>
                    <input name="password" type="password">

                    <input class="btn bg-blue-700 mt-8" type="submit" value="Log-in">
                    <p class="mt-2">
                        Don't have an account ?
                        <a href="index.php?action=viewSign">Sign in</a>
                    </p>
                </form>
            </div>
        </section>
        <?php require_once("footer.php") ?>
    </body>
</html>
