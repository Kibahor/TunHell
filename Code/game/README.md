# Voici ce qu'il faut faire pour installer son environnement de travail :

- Installer VSCode et NodeJS  
- Une fois installé sur vscode, vous allez installer l'extension *JavaScript and TypeScript Nightly* (celle de microsoft) et je vous conseille d'installer aussi *Gitlens* ou *Git History*
- Pour ce qui est de nodejs, il va falloir installer les modules nécessaire, il existe deux moyen d'utiliser les modules,
        - Le premier est d'installer les modules directement dans le dossier du projet "npm install <nom module>" et il se trouveront dans "node_modules"
        - La deuxième est de l'installer en global (donc de le dossier de nodejs), on va choisir cette façon car le dossier "node_modules" n'a pas a se retrouver sur le git.
- Pour ce faire on va installer les modules : **typescript** et **jest** (test unitaire) -> "npm install -g typescript jest"
- Une fois fait, copier le dossier "Ressources/VsCodeIntegration" dans "Code/" et il ne suffit plus qu'a lancer l'application avec F5 ou "Executer -> Démarrer le débogage"
- Pour l'instant ce n'est config que pour windows, si vous voulez le faire linux et que vous n'y arriver pas, on verra ensemble.

Lukas