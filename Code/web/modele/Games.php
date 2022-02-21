<?php

class Games{

    private $id;
    private $date;
    private $idHostAccount;

    public __construct($id, $date, $idHostAccount){
        $this->id = $id;
        $this->date = $date;
        $this->idHostAccount = $idHostAccount;
    }

    public function getId(){
        return $this->id;
    }

    public function setId($id){
        $this->id = $id;
    }

    public function getDate(){
        return $this->date;
    }

    public function setDate($date){
        $this->date = $date;
    }

    public function getIdHostAccount(){
        return $this->idHostAccount;
    }

    public function setIdHostAccount($idHostAccount){
        $this->idHostAccount = $idHostAccount;
    }


}