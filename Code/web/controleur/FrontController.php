<?php
class FrontController{

    function __construct(){
        global $rep, $vues;

        $listeActions_Visiteur = array("viewAcceuil", "viewSign",
        "viewLog", "viewDocumentation", "viewHand", "viewTerms",
        "viewContact", "login", "signup");
        $listeActions_Utilisateur = array("deconnexion");

        try{
            $MdlAccount = new ModelVisiteur();
			$utilisateur = $MdlAccount->isLogin();
            if($utilisateur != null)
                $isLogin = 1;
            else
                $isLogin = 0;

            isset($_REQUEST['action'])  ?  $action = Validation::validateString($_REQUEST['action'])  :  $action = "viewAcceuil";

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
