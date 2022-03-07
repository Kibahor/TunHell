<?php
Class ModelVisiteur
{

    public function __construct()
    {

    }

    public function createAUser(){
        $AccountGateway = new AccountGateway;
        $pseudo = Validation::validateName($_POST["pseudo"]);
        if($AccountGateway->FindByPseudo($pseudo) != NULL) throw new Exception("exist username");
        $password = Validation::validatePassword($_POST["password"]);
        $passwordconfirm = Validation::validateConfirmPassword($password, $_POST["confirmpassword"]);
        
        $hash = password_hash($password, PASSWORD_BCRYPT);
        $date = date("y-m-d");
        $AccountGateway->insert($pseudo, "avatar1", $hash, $date, 0, 0);
        
        return $this->logUser();
    }

    public function logUser(){
		$pseudo = Validation::validateName($_POST["pseudo"]);
		$password = Validation::validatePassword($_POST["password"]);

        $AccountGateway = new AccountGateway();
		$utilisateur = $AccountGateway->FindByPseudo($pseudo);

		if($utilisateur == NULL) return null;

		if(password_verify($password,$utilisateur->getPasswordHash()))
        {
            $_SESSION['role'] = "user";
    		$_SESSION['userid'] = $utilisateur->getId();
            return $utilisateur;
        }
        else
        {
            return null;
        }
    }

    public function isLogin()                                               //renvoie true si l'utilisateur actuel est connecté sinon false
	{
		if (isset($_SESSION['userid']) && isset($_SESSION['role'])) {
			$userid = Validation::validateString($_SESSION['userid']);
			$role = Validation::validateString($_SESSION['role']);
            $AccountGateway = new AccountGateway();
			return $AccountGateway->FindById($userid);
		}
		else
		{
			return null;
		}
	}

}
?>
