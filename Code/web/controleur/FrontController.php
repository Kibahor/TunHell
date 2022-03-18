<?php
class FrontController{

    function __construct(){
        global $rep, $vues;

        $listeActions_Visiteur = array("viewAcceuil", "viewSign",
        "viewLog", "viewDocumentation", "viewHand", "viewTerms",
        "viewContact","viewTOS","viewUnderConstruction", "login", "signup");
        $listeActions_Utilisateur = array("logout", "viewProfil", "changePseudo", "deleteAccount");

        try{
            $MdlAccount = new ModelVisiteur();
			$utilisateur = $MdlAccount->isLogin();


            isset($_REQUEST['action'])  ?  $action = Validation::validateString($_REQUEST['action'])  :  $action = "viewAcceuil";
            if(!in_array($action, $listeActions_Visiteur) && !in_array($action, $listeActions_Utilisateur)) $action = "viewAcceuil";

            if (in_array($action, $listeActions_Utilisateur))
            {
                if($utilisateur == null)
                {
                    $ctrV = new VisiteurController("viewLog");
                }
                else
                {
                    $ctrU = new UtilisateurController($action);
                }
            }
            else
            {
                $ctrV = new VisiteurController($action);
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
