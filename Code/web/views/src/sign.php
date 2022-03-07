<html class="h-full p-0 m-0" lang="fr" dir="ltr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>&#9997; Sign-up</title>
        <link href="views/dist/output.css" rel="stylesheet">
	</head>
    <body class="bg-slate-200 flex flex-col font-Montserrat h-full m-0 p-0">
        <?php require_once("header.php") ?>
        <section class="main flex h-full justify-center items-center">
            <div class="flex">
                <div class="hidden lg:flex">
                    <img class="h-96 w-96 2xl:h-32 2xl:w-32 object-cover rounded-l-lg" src="views/rsc/dragon.jpg" alt="">
                </div>
                <form class ="bg-white rounded-r-lg flex flex-col items-center justify-center h-96 w-96 2xl:h-32 2xl:w-32 2xl:gap-y-1" action="index.php?action=signup">
                    <h1 class="text-2xl font-bold">Create Account</h1>

                    <label for="pseudo" class="mt-3 text-xs">Pseudo : </label>
                    <input name="pseudo" type="text">
                    <?php
                            if(isset($empty_username) && $empty_username == true){
                                echo '<pre class="com">le pseudo ne peut pas être vide</pre>';
                            }
                            if(isset($invalid_username) && $invalid_username == true){
                                echo '<pre class="com">le pseudo est invalide, il doit contenir entre 1 et 25 charactères</pre>';
                            }
                            if(isset($exist_username) && $exist_username == true){
                                echo '<pre class="com">le pseudo est déjà utilisé</pre>';
                            }
                    ?>
                    <label for="password" class="mt-3 text-xs">Password : </label>
                    <input name="password" type="password">
                    <?php
                            if(isset($empty_password) && $empty_password == true){
                                echo '<p>le mot de passe ne peut pas être vide</p>';
                            }
                            if(isset($invalid_password) && $invalid_password == true){
                                echo '<pre class="com">Un mot de passe valide aura<br>
                                        - de 8 à 20 caractères<br>
                                        - au moins une lettre minuscule<br>
                                        - au moins une lettre majuscule<br>
                                        - au moins un chiffre<br>
                                        - au moins un de ces caractères spéciaux: $ @ % * + - _ !</p>';
                            }
                    ?>
                    <label for="password2" class="mt-3 text-xs">Password again : </label>
                    <input name="password2" type="password">
                    <?php
                            if(isset($w_cpassword) && $w_cpassword == true){
                                echo '<pre class="com">le mot de passe de confirmation ne correspond pas</pre>';
                            }
                    ?>
                    
                    <input class="btn bg-blue-700 mt-6" type="submit" value="Register">
                    <?php
                            if(isset($err) && $err == "err auth"){
                                echo '<pre class="com">Erreur lors de la création du compte, veuillez recommencer</pre>';
                            }
                    ?>
                    <p class="mt-2">
                        Already have an account ?
                        <a href="index.php?action=viewLog">Log in</a>
                    </p>
                </form>
            </div>
        </section>
        <?php require_once("footer.php") ?>
    </body>
</html>