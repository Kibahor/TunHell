<?php
Class ModelAccount
{
    protected $AccountGateway;

    public function __construct($AccountGateway)
    {
        $this->AccountGateway = new AccountGateway
    }

    public function createAUser(){
        $pseudo = Validation::validateName($_POST["pseudo"]);
        if($AccountGateway->FindByPseudo($pseudo) != NULL) throw new Exception("Le pseudo est déjà existant");
        $password = Validation::validatePassword($_POST["password"]);
        $passwordconfirm = Validation::validateConfirmPassword($password, $_POST["secondpassword"]);
        $hash = password_hash($password, PASSWORD_DEFAULT);
        $date = date("d.m.y");
        $AccountGateway->insertUser($pseudo, "default", $hash, $date);
    }

    public function logUser(){
		$pseudo = Validation::validateName($_POST["pseudo"]);
		$password = Validation::validatePassword($_POST["password"]);
		$utilisateur = $AccountGateway->getUser($pseudo);
		if($utilisateur == NULL) throw new Exception("L'utilisateur n'existe pas");
		password_verify($password,$utilisateur->get_password());
		$_SESSION['userid'] = $utilisateur->get_id();
    }

}
?>
