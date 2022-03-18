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
                case "invalid username": echo "invalid username"; break;
                case "username already use": echo "username already use"; break;
                case "empty username": echo "empty username"; break;
                default: break;
            }
        }

        $accountDisplay = $mdlUtilisateur->getInfoUserForProfil(Validation::validateInt($_SESSION['userid']));

        require($rep.$vues['profil']);
    }

    function deleteAccount(){
        global $rep, $vues;
            $mdlUtilisateur = new ModelUtilisateur();
            $mdlUtilisateur->deleteAccount();
            $mdlUtilisateur->logout();
        }
    

}

 ?>
