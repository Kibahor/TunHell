<?php

class ViewController{

    public function __construct(){
        //variables globales
        global $rep, $vues;
        //tableau des messages d'erreur

        try{
            isset($_REQUEST['action'])  ?  $action = Validation::validateString($_REQUEST['action'])  :  $action = "reinit";

            switch ($action){

                case "reinit":
                    $this->Reinit();
                    break;

                case "creerCompte":
                    $this->vueCreationCompte();
                    break;

                case "connection":
                    $this->vueConnection();
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

    function Reinit(){
        global $rep, $vues;
        //vue principale
        require ($rep.$vues['acceuil']);
    }

    function vueCreationCompte(){
        global $rep, $vues;
        //vue creation compte
        require ($rep.$vues['sign']);
    }

    function vueConnection(){
        global $rep, $vues;
        //vue connection
        require ($rep.$vues['login']);
    }


}
