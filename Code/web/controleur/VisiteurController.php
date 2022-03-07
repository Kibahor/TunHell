<?php

class VisiteurController{

    public function __construct($action){
        //variables globales
        global $rep, $vues;

        try{
            switch ($action){

                case "viewAcceuil":
                    $this->viewAcceuil();
                    break;

                case "viewSign":
                    $this->viewSign();
                    break;

                case "viewLog":
                    $this->viewLog();
                    break;

                case "viewDocumentation":
                    $this->viewDocumentation();
                    break;

                case "viewHand":
                    $this->viewHand();
                    break;

                case "viewTerms":
                    $this->viewTerms();
                    break;

                case "viewContact":
                    $this->viewContact();
                    break;

                case "viewTOS":
                    $this->viewTOS();
                    break;
    

                case "login":
                    $this->login();
                    break;

                case 'signup':
                    $this-> signup();
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

    function viewAcceuil(){
        global $rep, $vues;
        //vue principale
        require ($rep.$vues['acceuil']);
    }

    function viewSign(){
        global $rep, $vues;
        //vue creation compte
        require ($rep.$vues['sign']);
    }

    function viewLog(){
        global $rep, $vues;
        //vue connection
        require ($rep.$vues['login']);
    }

    function viewDocumentation(){
        global $rep, $vues;
        // vue règles et informations
        require($rep.$vues['documentation']);
    }

    function viewContact(){
        global $rep, $vues;
        require($rep.$vues['contact']);
    }

    function viewHand(){
        global $rep, $vues;
        require($rep.$vues['hand']);
    }

    function viewTerms(){
        global $rep, $vues;
        require($rep.$vues['rgpd']);
    }

    function viewTOS(){
        global $rep, $vues;
        require($rep.$vues['tos']);
    }

    function login(){
        global $rep, $vues;


        try {
            $mdlAccount = new ModelVisiteur();
            $utilisateur = $mdlAccount->logUser();
            
        }
        catch(Exception $e){
            switch($e->getMessage()){
                case "empty username": $empty_username = true; break;
                case "invalid username": $invalid_username = true; break;
                case "empty password" : $empty_password = true; break;
                case "invalid password" : $invalid_password = true; break;
                default: break;
            }
            require ($rep.$vues['login']);
            exit;
        }


        if($utilisateur == null)
        {
            $err = "err auth";
            require ($rep.$vues['login']);
        }
        else
        {
            require ($rep.$vues['acceuil']);
        }
    }


    function signup(){
        global $rep, $vues;

        try {
            $mdlVisiteur = new ModelVisiteur();
            $utilisateur = $mdlVisiteur->createAUser();
        }
        catch(Exception $e) {
            
            switch($e->getMessage()){
                case "empty username": $empty_username = true; break;
                //case "invalid username": $invalid_username = true; break;
                case "exist username": $exist_username = true; break;
                case "empty password" : $empty_password = true; break;
                case "invalid password" : $invalid_password = true; break;
                case "wrong confirmpassord" : $w_cpassword = true; break;
                default: break;
            }
            require ($rep.$vues['sign']);
            exit;
        }


        if($utilisateur == null)
        {
            $err = "err auth";
            require ($rep.$vues['sign']);
        }
        else
        {
            require ($rep.$vues['acceuil']);
        }
    }
}
