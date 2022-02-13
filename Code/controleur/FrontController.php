<?php
class FrontController{

    function __construct(){
        $listeActions_Visiteur = array("creerCompte", "connection");


        try{
            $action = $_REQUEST['action'];
            if (in_array($action, $listeActions_Visiteur)){
                $ctrV = new ViewController();
            }
        }
        catch(PDOException $e){
            $tabErreur[] = $e->getMessage();
            #require ($rep.$vues['erreur']);
        }
        catch(Exception $e){
            $tabErreur[] = $e->getMessage();
            #require ($rep.$vues['erreur']);
        }

    }



}
