<?php

class Account{
    private $id;
    private $pseudo;
    private $avatar;
    private $password;
    private $creationDate;
    private $numberGames;
    private $numberVictoires;


    public function __construct($id, $pseudo, $avatar, $password){
        $this->id = $id;
        $this->pseudo = $pseudo;
        $this->avatar = $avatar;
        $this->password = $password;
    }


    public function getId(){
        return $this->id;
    }

    public function setId($id){
        $this->id = $id;
    }

    public function getPseudo(){
        return $this->pseudo;
    }

    public function setPseudo($pseudo){
        $this->pseudo = $pseudo;
    }

    public function getAvatar(){
        return $this->avatar;
    }

    public function setAvatar($avatar){
        $this->avatar = $avatar;
    }

    public function getPassword(){
        return $this->password;
    }

    public function setPassword($password){
        $this->password = $password;
    }

    public function getCreationDate(){
        return $this->creationDate;
    }

    public function setCreationDate($creationDate){
        $this->creationDate = $creationDate;
    }

    public function getNumbrerGames(){
        return $this->numberGames;
    }

    public function setNumberGames($numberGames){
        $this->numberGames = $numberGames;
    }

    public function getNumberVictoires(){
        return $this->numberVictoires;
    }

    public function setNumberVictoires($numberVictoires){
        $this->numberVictoires = $numberVictoires;
    }

}