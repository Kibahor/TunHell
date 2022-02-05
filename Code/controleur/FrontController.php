<?php
class FrontController{

    function __construct(){
        $listeActions_Visiteur = array("creerCompte", "connection");
        

        try{
            $action = $_REQUEST['action'];
            if (in_array($action, $listeActions_Visiteur)){
                $ctrV = new ViewController();
            }
        } catch (Exception $e){ 
            //Gestion de la page d'erreur 
        }

    }



}