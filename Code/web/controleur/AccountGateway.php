<?php

class AccountGateway extends Connection
{
    public function __construct(){
        parent::__construct();
    }

    public function insert($pseudo, $avatar, $passwrd, $creationDate, $numberGames, $numberVictoires)
    {
        $query = 'INSERT INTO account (Pseudo, Avatar, Password, CreationDate, NumberGames, NumberVictoires) VALUES(:pseudo, :avatar, :passwrd, :creationDate, :numberGames, :numberVictoires)';
        $param = array(':pseudo' => array($pseudo, PDO::PARAM_STR),
                       ':avatar' => array($avatar, PDO::PARAM_STR),
                       ':passwrd' => array($passwrd, PDO::PARAM_STR),
                       ':creationDate' => array($creationDate, PDO::PARAM_STR),
                       ':numberGames' => array($numberGames, PDO::PARAM_INT),
                       ':numberVictoires' => array($numberVictoires, PDO::PARAM_INT));
        $this->executeQuery($query, $param);
    }

    public function idByPseudo($pseudo)
    {
        $query = 'SELECT ID FROM account WHERE Pseudo=:pseudo';
        $param = array(':pseudo' => array($pseudo, PDO::PARAM_STR));
        $this->executeQuery($query, $param);
        $results = $this->getResults();
        return $results[0]['ID'];
    }

    public function pseudoById($id)
    {
        $query = 'SELECT Pseudo FROM account WHERE ID=:id';
        $param = array(':id' => array($id, PDO::PARAM_INT));
        $this->executeQuery($query, $param);
        $results = $this->getResults();
        return $results[0]['Pseudo'];
    }

    public function delete(int $id)
    {
        $query = 'DELETE FROM account WHERE id=:id';
        $this->executeQuery($query, array(':id' => array($id, PDO::PARAM_INT)));
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

    public function FindByIdForProfil(string $id)
    {
        $account = $this->FindById($id);
        $account->setPasswordHash("");
        return $account;
    }

    public function changePseudo(string $oldPseudo, string $pseudo)
    {
        $query = 'UPDATE account SET Pseudo=:pseudo WHERE Pseudo=:oldpseudo';
        $param = array(':pseudo' => array($pseudo, PDO::PARAM_STR),
                       ':oldpseudo' => array($oldPseudo, PDO::PARAM_STR));
        $this->executeQuery($query, $param);
    }

    public function changePassword(string $id, string $password)
    {
        $query = 'UPDATE account SET Password=:password WHERE ID=:id';
        $param = array(':password' => array($password, PDO::PARAM_STR),
                       ':id' => array($id, PDO::PARAM_INT));
        $this->executeQuery($query, $param);
    }
}
