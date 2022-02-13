<?php

class ViewController{

    public function __construct(){
        //variables globales
        global $rep, $vues;
        //tableau des messages d'erreur

        try{
            $action=$_REQUEST['action'];

            switch ($action){

                case NULL:
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
        } catch (Exception $e){
            //gestion des erreurs
        }
        exit(0);
    }

    function Reinit(){
        //vue principale
        require ($rep.$vues['acceuil']);
    }

    function vueCreationCompte(){
        //vue creation compte
        require ($rep.$vues['sign']);
    }

    function vueConnection(){
        //vue connection
        require ($rep.$vues['login']);
    }


}
