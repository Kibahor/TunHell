<?php
class FrontController{

    function __construct(){
        $listeActions_Visiteur = array("creerCompte", "connection", "reinit");

        try{
            isset($_REQUEST['action'])  ?  $action = Validation::validateString($_REQUEST['action'])  :  $action = "reinit";
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
