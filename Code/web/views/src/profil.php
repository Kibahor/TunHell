<html class="h-full p-0 m-0" lang="fr" dir="ltr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TunHell - Profil</title>
        <link href="views/dist/output.css" rel="stylesheet">
        <link rel="shortcut icon" type="image/png" href="views/rsc/favicon.png">
	</head>
    <body class="bg-slate-200 flex flex-col font-Montserrat h-full m-0 p-0">
        <?php require_once("header.php") ?>
        <section class="main p-4 flex flex-col items-center justify-center">

            <!-- Dashboard -->
            <div class="flex justify-center flex-wrap">
                <!-- Card -->
                <div class="bg-gray-300 rounded-lg flex justify-center text-sm text-center flex-wrap p-8 gap-12">
                    <!-- Left -->
                    <div>
                        <div class="flex items-center w-96 justify-center gap-5 p-8 ">
                            <div>
                                <img src="views/rsc/pp.png" class="rounded-full w-20 h-20" alt="">
                                <h2 class="font-bold text-4xl mt-2 text-purple-700"><?php echo $accountDisplay->getPseudo() ?></h2>
                            </div>
                            <!-- Separator -->
                            <span class="inline-block border-l-2 w-2 h-20 border-solid border-slate-800 mx-2"></span>
                            <div>
                                <p class="font-bold text-orange-500">Since</p>
                                <h2 class="font-bold text-xl"><?php echo $accountDisplay->getCreationDate() ?></h2>
                            </div>
                        </div>
                        <!-- Right -->
                        <div class="flex justify-around text-slate-200">
                            <div class="bg-slate-500 rounded-lg p-4">
                                <h2 class="font-bold text-4xl mt-2"><?php echo $accountDisplay->getNumbrerGames() ?></h2>
                                <h4>Games</h4>
                            </div>
                            <div class="bg-slate-500 rounded-lg p-4">
                                <h2 class="font-bold text-4xl mt-2"><?php echo $accountDisplay->getNumberVictoires() ?></h2>
                                <h4>Victories</h4>
                            </div>
                            <div class="bg-slate-500 rounded-lg p-4">
                                <h2 class="font-bold text-4xl mt-2"><?php
                                        if ($accountDisplay->getNumbrerGames() == 0){
                                            echo 'N/A';
                                        }
                                        else{
                                            echo $accountDisplay->getNumberVictoires()/$accountDisplay->getNumbrerGames();}
                                    ?></h2>
                                <h4>Ratio</h4>
                            </div>
                         </div>
                    </div>
                    <!-- Graph -->
                        <!-- Passage de valeurs au .JS -->
                        <?php
                            $games = $accountDisplay->getNumbrerGames();
                            $victoires = $accountDisplay->getNumberVictoires();
                        ?>
                        <input type="hidden" id="games" value= <?php echo $games ?> />
                        <input type="hidden" id="victoires" value= <?php echo $victoires?> />

                        <?php
                            if($games != 0)
                                echo ('
                                    <div class="flex text-sm text-center flex-wrap p-8 text-slate-50 gap-12">
                                        <canvas id="barCanvas" class="w-80 h-80"></canvas>

                                        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>
                                        <script src="views/src/graph.js"></script>
                                    </div>
                                ')
                        ?>

                </div>
            </div>
            <!-- Settings -->
            <div class="mt-8 mb-8 flex justify-center flex-wrap">
                <!-- Card -->
                <div class="bg-gray-300 rounded-lg flex justify-center text-sm text-center flex-wrap p-6 md:p-8">
                    <div>
                        <h1 class="text-3xl font-bold mb-2 text-purple-700">Account</h1>
                        <div class="w-full border-t border-gray-700 m-3"></div>

                        <form class="gap-y-2 flex flex-col text-left" action="index.php?action=changePseudo" method="POST">
                            <h1 class="text-xl font-bold mb-2 text-stone-800">Profil</h1>
                            <h2 class="font-bold text-md text-sky-900">New pseudo : </h2>
                            <input name="pseudo" type="text">
                            <input class="btn bg-blue-700 mt-6" type="submit" value="Register">
                        </form>
                        <form class="gap-y-2 flex flex-col text-left" action="index.php?action=changePassword" method="POST">
                            <div class="w-full border-t border-gray-700 m-3"></div>
                            <h1 class="text-xl font-bold mb-2 text-stone-800">Personal information</h1>
                            <div class="flex justify-center gap-5 flex-wrap ">
                                <div>
                                    <h2 class="font-bold text-md text-sky-900">New password : </h2>
                                    <input name="password" type="password">
                                </div>
                                <div>
                                    <h2 class="font-bold text-md text-sky-900">New password again : </h2>
                                    <input name="confirmpassword" type="password">
                                </div>
                            </div>
                            <input class="btn bg-blue-700 mt-6" type="submit" value="Register">
                        </form>
                        <div class="w-full border-t border-gray-700 m-3"></div>
                        <button class="btn bg-red-700 mt-6 w-full" type="button" name="delete" onclick="confirmDelete()">Delete</button>
                        <script>
                            function confirmDelete(){
                                if(confirm("Êtes vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")){
                                    window.location.replace("index.php?action=deleteAccount");
                                }
                            }
                        </script>
                    </div>
                </div>
            </div>
            <?php
                if(isset($invalid_username) && $invalid_username == true){
                    echo '  <div class="bg-red-500 rounded-lg p-2 flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="font-semibold text-white">Le nom est pas valide</p>
                            </div>';
                }
                if(isset($username_already_use) && $username_already_use == true){
                    echo '  <div class="bg-red-500 rounded-lg p-2 flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="font-semibold text-white">Le nom est déjà utilisé</p>
                            </div>';
                }
                if(isset($empty_username) && $empty_username == true){
                    echo '  <div class="bg-red-500 rounded-lg p-2 flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="font-semibold text-white">Le nom est vide</p>
                            </div>';
                }
                if(isset($empty_password) && $empty_password == true){
                    echo '  <div class="bg-red-500 rounded-lg p-2 flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="font-semibold text-white">Le mot de passe est vide</p>
                            </div>';
                }
                if(isset($invalid_password) && $invalid_password == true){
                    echo '  <div class="bg-red-500 rounded-lg p-2 flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="font-semibold text-white">
                                            Le mots de passe doit avoir :<br>
                                            • 8 à 20 caractères<br>
                                            • Une lettre minuscule et une lettre majuscule<br>
                                            • Un chiffre<br>
                                            • Un de ces caractères spéciaux: $ @ % * + - _ !</p>
                            </div>';
                }
                if(isset($wrong_confirmpassord) && $wrong_confirmpassord == true){
                    echo '  <div class="bg-red-500 rounded-lg p-2 flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p class="font-semibold text-white">Les mots de passes ne correspondent pas</p>
                            </div>';
                }
            ?>
        </section>
        <?php require_once("footer.php") ?>
    </body>
</html>
