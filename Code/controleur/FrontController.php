<?php
class FrontController{

    function __construct(){
        global $rep, $vues;
        $listeActions_Visiteur = array("creerCompte", "connection", "afficherAcceuil");

        try{
            isset($_REQUEST['action'])  ?  $action = Validation::validateString($_REQUEST['action'])  :  $action = "afficherAcceuil";
            if (in_array($action, $listeActions_Visiteur)){
                $ctrV = new ViewController();
            }
        }
        catch(PDOException $e){
            $tabErreur[] = $e->getMessage();
            require ($rep.$vues['error']);
        }
        catch(Exception $e){
            $tabErreur[] = $e->getMessage();
            require ($rep.$vues['error']);
        }

    }



}
