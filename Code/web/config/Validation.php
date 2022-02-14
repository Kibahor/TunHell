<?php
class Validation{

    public static function validateName(string $username){
		if ($username == NULL){
			throw new Exception("Le nom ne peut être vide");
		} else {
			if (!preg_match('/[a-zA-Z0-9].{1,25}/', $username)){
				throw new Exception("Le nom ".$username." n'est pas valide il faut au minimum 1 caractère et au maximum 25 caractères");
			}
			return Validation::validateString($username);
		}
	}

    public static function validatePassword(string $password){
        if ($password == NULL) {
            throw new Exception("Le mot de passe ne peut être vide");
        } else {
            if (!preg_match('/^.{5,}$/', $password)) {
                throw new Exception("Le mot de passe n'est pas valide : 5 caractères exigés");
            }
            return Validation::validateString($password);
        }
    }

    public static function validateConfirmPassword(string $password, string $confirmpassword){
        Validation::validatePassword($confirmpassword);
        if($confirmpassword != $password) {
            throw new Exception("Le mot de passe n'est pas similaire");
        }
    }

    public static function validateString(string $chaine){
        if(filter_var($chaine, FILTER_SANITIZE_STRING) != $chaine) throw new Exception("La chaine '".$chaine."' n'est pas valide.");
        return $chaine;
    }
}
?>
