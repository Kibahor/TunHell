<?php
class FrontController{

    function __construct(){
        global $rep, $vues;

        $listeActions_Visiteur = array("vueCreationCompte", "vueConnection", "afficherAcceuil", "login");
        $listeActions_Utilisateur = array("deconnexion");

        try{
            $MdlAccount = new ModelAccount();
			$utilisateur = $MdlAccount->isLogin();
            if($utilisateur != null)
                $isLogin = 1;
            else
                $isLogin = 0;

            isset($_REQUEST['action'])  ?  $action = Validation::validateString($_REQUEST['action'])  :  $action = "afficherAcceuil";

            if (in_array($action, $listeActions_Utilisateur))
            {
                if($utilisateur == null)
                {
                    $ctrV = new VisiteurController("vueConnection");
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
