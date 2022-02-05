<?php

class ViewController{
    
    public function __construct(){
        //variables globales

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
        } catch (PDOException $e){
            //gestion exceptions PDO
        } catch (Exception $e2){
            //gestion autres exceptions
        }
        exit(0);
    }

    function Reinit(){
        //vue principale
    }

    function vueCreationCompte(){
        //vue creation compte
    }

    function vueConnection(){
        //vue connection
    }


}