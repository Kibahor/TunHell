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

}

 ?>
