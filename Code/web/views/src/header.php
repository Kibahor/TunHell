<header class="text-sm p-4">

	<!-- Responsive navbar -->

	<nav class="">
		<div class="w-auto">
			<div class="flex justify-between px-4 py-4">
				<!-- logo -->
				<a href="index.php" class=""><img class="w-36" src="views/rsc/logo.png" alt=""></a>
				<!-- primary nav -->
				<div class="hidden lg:flex items-center space-x-6">
					<a href="index.php?action=viewUnderConstruction" class="">Create a game room &#127793;</a>
					<a href="index.php?action=viewDocumentation" class="">Documentation &#10068;</a>
				</div>
				<?php
					if(isset($_SESSION['role']) && $_SESSION['role'] == 'user'){
						echo '
						<div class="hidden lg:flex items-center space-x-4">
							<div class="flex">
								<a href="index.php?action=viewProfil" class="half-btn-left rounded-l-lg bg-slate-600">Profil</a>
								<a href="index.php?action=logout" class="half-btn-right rounded-r-lg bg-slate-500">Logout</a>
							</div>
							<a href="index.php?action=viewGetting" class="btn bg-blue-700">Getting started</a>
						</div>
						';
					}else{
						echo '
						<div class="hidden lg:flex items-center space-x-4">
							<a href="index.php?action=viewLog" class="btn bg-slate-600">Register - Log in</a>
							<a href="index.php?action=viewGetting" class="btn bg-blue-700">Getting started</a>
						</div>
						';
						}
				?>

				<!-- mobile -->
				<div class="lg:hidden flex items-center">
					<button class="mobile-menu-button">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
						</svg>
					</button>
				</div>
			</div>

			<!-- mobile menu -->
			<div class="mobile-menu hidden flex justify-center text-xl lg:hidden">
				<div class="justify-start space-y-8">
					<a href="index.php?action=viewUnderConstruction" class="block py-3 px-4 mt-12">Create a game room &#127793;</a>
					<a href="index.php?action=viewDocumentation" class="block py-3 px-4">Documentation &#10068;</a>
					<?php
						if(isset($_SESSION['role']) && $_SESSION['role'] == 'user'){
							echo '
							<a href="index.php?action=viewProfil" class="block py-3 px-4 btn bg-slate-600">Profil</a>
							<a href="index.php?action=logout" class="block py-3 px-4 btn bg-slate-600">Logout</a>
							<a href="index.php?action=viewGetting" class="block py-3 px-4 btn bg-blue-700">Getting started</a>
						';
						} else{
							echo '
								<a href="index.php?action=viewLog" class="block py-3 px-4 btn bg-slate-600">Register - Log in</a>
								<a href="index.php?action=viewGetting" class="block py-3 px-4 btn bg-blue-700">Getting started</a>
							';
						}
					?>
				</div>
			</div>
		</div>
	</nav>
</header>
