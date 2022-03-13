<!doctype html>
<html class="h-full p-0 m-0">
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="TunHell is an onlie card game, where the goal is to manage a team of dwarf for dig and collect sumptuous treasures but beware of the encounter you may have in the mine. Embark on the adventure and join a game of TunHell !">
	<title>Homepage</title>
	<link href="views/dist/output.css" rel="stylesheet">
	<link rel="shortcut icon" type="image/png" href="views/rsc/favicon.png">
	</head>
	
	<body class="bg-slate-200 flex flex-col h-full font-Montserrat">
	
		<?php require_once("header.php") ?>
		
			<section class="main flex h-full p-4">
				<div class="flex-1 flex flex-col gap-8 text-center items-center justify-center">
						<h1 class="font-extrabold text-6xl text-violet-600 lg:hidden">Join a game of TunHell !</h1>
						<div class="hidden lg:flex"><h1 class="font-extrabold text-6xl">Embark on the adventure and join a game of TunHell !</h1></div>
						<form class="flex gap-2 flex-wrap" action="index.php" method="post">
								<input class="rounded-lg" type="number" placeholder="1234" name="game_code" value="">
								<input class="btn-square bg-violet-400" type="submit" name="" value="Join">
						</form>
				</div>
				<div class="hidden lg:flex-1 lg:flex lg:justify-center lg:items-center">
					<img src="views/rsc/home_image.png" alt="Image d'illustation">
				</div>
			</section>
		
		<?php require_once("footer.php") ?>
		
	</body>
</html>