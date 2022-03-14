<html class="h-full p-0 m-0" lang="fr" dir="ltr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>&#128273; Login</title>
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
                    <div class="flex text-sm text-center flex-wrap p-8 text-slate-50 gap-12">
                        <!-- Graph -->
                        <!-- Passage de valeurs au .JS -->
                        <?php 
                            $games = 40;/*$accountDisplay->getNumbrerGames();*/
                            $victoires = 10;/*$accountDisplay->getNumberVictoires();*/
                        ?>
                        <input type="hidden" id="games" value= <?php echo $games ?> />
                        <input type="hidden" id="victoires" value= <?php echo $victoires?> />

                        <canvas id="barCanvas" class="w-80 h-80"></canvas>

                        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>
                        <script src="views/src/graph.js"></script>
                    </div> 
                </div>
            </div>
            <!-- Settings -->
            <div class="mt-8 flex justify-center flex-wrap">
                <!-- Card -->
                <div class="bg-gray-300 rounded-lg flex justify-center text-sm text-center flex-wrap p-6 md:p-8">
                    <div>
                        <h1 class="text-3xl font-bold mb-2 text-purple-700">Account</h1>                
                        <div class="w-full border-t border-gray-700 m-3"></div>

                        <form class="gap-y-2 flex flex-col text-left" action="" method="POST">
                            <h1 class="text-xl font-bold mb-2 text-stone-800">Profile</h1>
                            <h2 class="font-bold text-md text-sky-900">New pseudo : </h2>
                            <input name="pseudo" type="text">
                            <input class="btn bg-blue-700 mt-6" type="submit" value="Register">
                        </form>
                        <form class="gap-y-2 flex flex-col text-left" action="" method="POST">
                            <div class="w-full border-t border-gray-700 m-3"></div>
                            <h1 class="text-xl font-bold mb-2 text-stone-800">Personal information</h1>
                            <div class="flex justify-center gap-5">
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
                        <form class="gap-y-2 flex flex-col" action=""  method="POST">
                            <input class="btn bg-red-700 mt-6" type="submit" value="Delete">
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
        <?php require_once("footer.php") ?>
    </body>
</html>


<!-- echo '<li>avatar : '.$accountDisplay->getAvatar().'<il>';
echo '<li>pseudo : '.$accountDisplay->getPseudo().'<il>';
echo '<li>Date création compte : '.$accountDisplay->getCreationDate().'<il>';
echo '<li>nombre de games jouées : '.$accountDisplay->getNumbrerGames().'<il>';
echo '<li>nombre de victoires : '.$accountDisplay->getNumberVictoires().'<il>'; -->
