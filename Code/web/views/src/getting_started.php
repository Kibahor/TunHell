<!doctype html>
<html class="h-full p-0 m-0">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>TunHell - Getting Started</title>
		<link href="views/dist/output.css" rel="stylesheet">
        <link rel="shortcut icon" type="image/png" href="views/rsc/favicon.png">
	</head>
    <body class="bg-slate-200 flex flex-col font-Montserrat h-full m-0 p-0">
		
		<?php require_once("header.php") ?>
        
        <section class="main flex p-4 lg:mt justify-center">
            <div class="flex flex-col gap-y-2 w-full justify-center p-2">
                <div class="grid grid-cols-1 gap-4 items-center">
                    <h2 id="terms" class="text-2xl font-bold text-violet-500 justify-self-center p-2">Getting started</h2>
                    <div class="w-full border-t border-gray-300"></div>
                    <div class="text-sm">
                        <h2 class="font-bold text-lg text-purple-400">1. General description :</h2>
                            <p class="m-4">Tunhell is a card game in a medieval fantasy universe which consists of managing a team of dwarves to mine and harvest wealth and resources.
                            This is a 4 players game and each game lasts 30 minutes on average. Each player receives in his starting hand 4 cards which can be miners, warriors, explorers as well as “deminers”.</p>
                        <h2 class="font-bold text-lg text-purple-400">2. Procedure</h2>
                            <p class="m-4">
                            On the board, 3 decks of cards are placed in the center and represent the mines that can be explored. A player can draw a certain number of cards (as many as mining points that he will have put on the mine) only if he is in numerical superiority in terms of points of combat (points held by the warriors).<br> As soon as a card is placed the player must choose among 5 cards that supply a manpower pool. Some cards should be placed directly and can't go into the player's hand. The mines are full of resources, various monsters, and land to evacuate before to arrive at the end of mine gate.<br> In the event of a confrontation with a monster, if the player's warriors are powerful enough to defeat them, he will keep his numbers (miners and warriors) and keep the number of monsters on the map for the wealth count at the end of the game.<br> Otherwise, the numbers of his choice will be discarded.<br> Also, monsters have several classes representing a certain number of wealth points. In case the player doesn't find any monster or wealth, he will come across a ground card that doesn't affect the final score.<br> Indeed several trophies exist: 
                            <br><br>• The trophy for the best miner, given each round to the player with the most ground cards or to the last equalizing the latter.
                            <br><br>• The "rat hunter" trophy is given to the player who has killed the most monsters of the "rat" class enemies, very common within the mines.
                            <br><br>The last card of a mine is an end of mine card which is totally random, it hides a powerful monster or a curse (a player can lose all his wealth, (…)). When 2 mines are completely empty, the points are counted
                            </p>
                        <h2 class="font-bold text-lg text-purple-400">3. Join a Game</h2>
                            <p class="m-4">If someone has an account, he can create multiplayer rooms. A room has a unique code that can be shared to other users so they can enter this code in the home page. If the person is on a mobile device, they will only have their playing hand displayed. On the other hand, on a computer, the person will be able to view the entire board</p>
                    </div>  
                </div>
                <div class="w-full border-t border-gray-300"></div>
            </div>  
        </section>
		<?php require_once("footer.php") ?>
    </body>
</html>