<?php

class AccountGateway extends Connection
{
    public function insert(Account $admin): int
    {
        $query = 'INSERT INTO account VALUES(:id, :pseudo, :avatar, :passwrd, :creationDate, :numberGames, :numberVictoires)';
        $this->executeQuery($query, array(':id' => array($admin->getId(), PDO::PARAM_INT), ':pseudo' => array($admin->getPseudo(), PDO::PARAM_STR), ':avatar' => array($admin->getAvatar(), PDO::PARAM_STR), ':creationDate' => array($admin->getCreationDate(), PDO::PARAM_STR), ':numberGames' => array($admin->getNumberGames(), PDO::PARAM_INT), ':numberVictoires' => array($admin->getNumberVictoires(), PDO::PARAM_INT)));
        return $this->lastInsertId();
    }

    public function delete(int $id): int
    {
        $query = 'DELETE FROM account WHERE id=:id';
        $this->executeQuery($query, array(':id' => array($id, PDO::PARAM_INT)));
        return $this->lastInsertId();
    }

    public function FindByPseudo(string $pseudo): Account
    {
        //preparation et execution de la requete sql (A APPRENDRE)
        $query = 'SELECT * FROM account WHERE pseudo=:pseudo';
        $this->executeQuery($query, array(':pseudo' => array($pseudo, PDO::PARAM_STR)));

        //conversion en objets
        $resultats = $this->getResults();

        $admin = new Admin($resultats[0]['id'], $resultats[0]['pseudo'], $resultats[0]['avatar'], $resultats[0]['password'],  $resultats[0]['creationDate'],  $resultats[0]['numberGames'], $resultats[0]['numberVictoires']);
        return $admin;
    }
}
