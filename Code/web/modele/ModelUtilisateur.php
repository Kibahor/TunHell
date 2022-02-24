<?php

class ModelUtilisateur{

    public function __construct(){ }

    public function logout()
    {
        session_unset();
        session_destroy();
        $_SESSION = array();
    }
}

 ?>
