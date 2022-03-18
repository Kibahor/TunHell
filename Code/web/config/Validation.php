<?php
class Validation{

    public static function validateMail($mail){
		if ($mail == NULL) {
			throw new Exception("Le mail ne peut être vide");
		} else {
			if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
				throw new Exception("L'email n'est pas valide");
			}
		}
		return $mail;
	}

    public static function validateName(string $username){
        $username = Validation::validateString($username);
		if ($username == NULL){
			throw new Exception("empty username");
		} else {
			if (!preg_match('/^[a-zA-Z]{1,25}\d{0,3}$/', $username)){
				throw new Exception("invalid username");
			}
			return $username;
		}
	}

    public static function validatePassword(string $password){
        $password = Validation::validateString($password);
        if ($password == NULL) {
            throw new Exception("empty password");
        } else {
            if (!preg_match('/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,20})$/', $password)) {
                throw new Exception("invalid password");
            }
            return $password;
        }
    }

    public static function validateConfirmPassword(string $password, string $confirmpassword){
        Validation::validatePassword($confirmpassword);
        if($confirmpassword != $password) {
            throw new Exception("wrong confirmpassord");
        }
    }

    public static function validateString(string $chaine){
        if(filter_var($chaine, FILTER_SANITIZE_STRING) != $chaine) return null;
            return $chaine;
    }

    public static function validateInt(string $int){
        if(filter_var($int, FILTER_SANITIZE_NUMBER_INT) != $int) return null;
            return $int;
    }
}
?>
