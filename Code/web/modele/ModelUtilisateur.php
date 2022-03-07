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
}

 ?>
