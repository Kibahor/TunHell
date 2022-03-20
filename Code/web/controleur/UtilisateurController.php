<?php

class UtilisateurController{

    public function __construct($action){
        //variables globales
        global $rep, $vues;

        try{
            switch ($action){

                case "logout":
                    $this->logout();
                    break;

                case "viewProfil":
                    $this->viewProfil();
                    break;

                case "changePseudo":
                    $this->changePseudo();
                    break;

                case "deleteAccount":
                    $this->deleteAccount();
                    break;

                case "changePassword":
                    $this->changePassword();
                    break;

                default:
                    //gestion d'erreurs
                    break;
            }
        }
        catch(Exception $e){
            $tabErreur[] = $e->getMessage();
            require ($rep.$vues['error']);
        }
        catch(PDOException $e){
            $tabErreur[] = $e->getMessage();
            require ($rep.$vues['error']);
        }

        exit(0);
    }

    function logout(){
        global $rep, $vues;

        $mdlUtilisateur = new ModelUtilisateur();
        $mdlUtilisateur->logout();

        require ($rep.$vues['acceuil']);
    }

    function viewProfil(){
        global $rep, $vues;

        $mdlUtilisateur = new ModelUtilisateur();
        $accountDisplay = $mdlUtilisateur->getInfoUserForProfil(Validation::validateInt($_SESSION['userid']));

        require($rep.$vues['profil']);
    }

    function changePseudo(){
        global $rep, $vues;

        try {
            $mdlUtilisateur = new ModelUtilisateur();
            $mdlUtilisateur->changePseudo();
        }
        catch(Exception $e){
            switch($e->getMessage()){
                case "invalid username": $invalid_username = true; break;
                case "username already use": $username_already_use = true; break;
                case "empty username": $empty_username = true; break;
                default: break;
            }
        }

        $accountDisplay = $mdlUtilisateur->getInfoUserForProfil(Validation::validateInt($_SESSION['userid']));

        require($rep.$vues['profil']);
    }

    function deleteAccount()
    {
        global $rep, $vues;

        $mdlUtilisateur = new ModelUtilisateur();
        $mdlUtilisateur->deleteAccount();
        $mdlUtilisateur->logout();

        require($rep.$vues['acceuil']);
    }

    function changePassword()
    {
        global $rep, $vues;

        try {
            $mdlUtilisateur = new ModelUtilisateur();
            $mdlUtilisateur->changePassword();
        }
        catch(Exception $e) {
            switch($e->getMessage()){
                case "empty password" : $empty_password = true; break;
                case "invalid password" : $invalid_password = true; break;
                case "wrong confirmpassord" : $wrong_confirmpassord = true; break;
                default: break;
            }
        }

        $accountDisplay = $mdlUtilisateur->getInfoUserForProfil(Validation::validateInt($_SESSION['userid']));

        require($rep.$vues['profil']);
    }
}

 ?>
