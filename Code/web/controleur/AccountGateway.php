<?php

class AccountGateway extends Connection
{
    public function __construct(){
        parent::__construct();
    }

    public function insert(Account $user): int
    {
        $query = 'INSERT INTO account (Pseudo, Avatar, Password, CreationDate, NumberGames, NumberVictoires) VALUES(:pseudo, :avatar, :passwrd, :creationDate, :numberGames, :numberVictoires)';
        $param = array(':pseudo' => array($user->getPseudo(), PDO::PARAM_STR),
                       ':avatar' => array($user->getAvatar(), PDO::PARAM_STR),
                       ':passwrd' => array($user->getPasswordHash(), PDO::PARAM_STR),
                       ':creationDate' => array($user->getCreationDate(), PDO::PARAM_STR),
                       ':numberGames' => array($user->getNumberGames(), PDO::PARAM_INT),
                       ':numberVictoires' => array($user->getNumberVictoires(), PDO::PARAM_INT));
        $this->executeQuery($query, $param);
        return $this->idByPseudo($user->getPseudo());
    }

    public function idByPseudo($pseudo)
    {
        $query = 'SELECT ID FROM account WHERE Pseudo=:pseudo';
        $param = array(':pseudo' => array($pseudo, PDO::PARAM_STR));
        $this->executeQuery($query, $param);
        return $this->getResults();
    }

    public function delete(int $id): int
    {
        $query = 'DELETE FROM account WHERE id=:id';
        $this->executeQuery($query, array(':id' => array($id, PDO::PARAM_INT)));
        return $this->lastInsertId();
    }

    public function FindByPseudo(string $pseudo)
    {
        //preparation et execution de la requete sql (A APPRENDRE)
        $query = 'SELECT * FROM account WHERE pseudo=:pseudo';
        $param = array(':pseudo' => array($pseudo, PDO::PARAM_STR));
        $this->executeQuery($query, $param);

        //conversion en objets
        $resultats = $this->getResults();

        $account = null;
        foreach ($resultats as $row){
            $account = new Account($row['ID'], $row['Pseudo'],
                                   $row['Avatar'], $row['Password'],
                                   $row['CreationDate'],  $row['NumberGames'],
                                   $row['NumberVictoires']);
        }
        return $account;
    }

    public function FindById(string $id)
    {
        //preparation et execution de la requete sql (A APPRENDRE)
        $query = 'SELECT * FROM account WHERE id=:id';
        $param = array(':id' => array($id, PDO::PARAM_INT));
        $this->executeQuery($query, $param);

        //conversion en objets
        $resultats = $this->getResults();

        $account = null;
        foreach ($resultats as $row){
            $account = new Account($row['ID'], $row['Pseudo'],
                                   $row['Avatar'], $row['Password'],
                                   $row['CreationDate'],  $row['NumberGames'],
                                   $row['NumberVictoires']);
        }
        return $account;
    }
}
