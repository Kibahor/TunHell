<?php

class ModelUtilisateur{

    public function __construct(){ }

    public function logout()
    {
        session_unset();
        session_destroy();
        $_SESSION = array();
    }

    public function getInfoUserForProfil($id)
    {
        $accountGateway = new AccountGateway();
        return $accountGateway->FindByIdForProfil($id);
    }

    public function changePseudo()
    {
        $accountGateway = new AccountGateway();
        if(!isset($_POST['Pseudo'])) throw new Exception("empty username");
        $pseudo = Validation::validateName($_POST['pseudo']);
        if($accountGateway->FindByPseudo($pseudo) != null) throw new Exception("username already use");

        $oldPseudo = Validation::validateName($accountGateway->pseudoById($_SESSION['userid']));
        $accountGateway->changePseudo($oldPseudo, $pseudo);
    }

    public function deleteAccount(){
        $accountGateway = new AccountGateway();
        $account = Validation::validateInt($_SESSION['userid']);
        $accountGateway->delete($account);
    }

}

 ?>
