<!doctype html>
<html class="h-full p-0 m-0">
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>&#127968; Homepage</title>
	<link href="views/dist/output.css" rel="stylesheet">
	</head>
	
	
	<body class="bg-fuchsia-200 flex flex-col font-Montserrat h-full m-0 p-0">
		<?php require_once("header.php") ?>
		
			<section class="main flex h-full items-stretch">
				<div class="flex-1 flex flex-col gap-8 text-center items-center justify-center">
						<h1 class="lg:hidden font-extrabold text-7xl text-mth-yellow">Join a game of TunHell ! &#129683;</h1>
						<div class="hidden lg:flex"><h1 class="font-extrabold text-6xl">Embark on the adventure and join a game of TunHell !</h1></div>
						<form class="flex gap-2 flex-wrap" action="acceuil.html" method="post">
								<input class="rounded-lg" type="number" placeholder="1234" name="game_code" value="">
								<input class=" btn-square bg-violet-400" type="submit" name="" value="Join">
						</form>
					
				</div>
				<div class="hidden lg:flex-1 lg:flex lg:justify-center lg:items-center">
					<img src="views/rsc/home_image.png" alt="Image d'illustation">
				</div>
			</section>
		
		<?php require_once("footer.php") ?>
		
</body>
</html>