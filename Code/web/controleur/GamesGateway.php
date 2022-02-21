<?php

class GamesGateway extends Connection
{
    public function insert(Games $new): int
    {
        $query = 'INSERT INTO news VALUES(:id, :date, :idHostAccount)';
        $this->executeQuery($query, array(':id' => array($new->getId(), PDO::PARAM_INT), ':date' => array($new->getDate(), PDO::PARAM_STR), ':idHostAccount' => array($new->getIdHostAccount(), PDO::PARAM_INT))));
        return $this->lastInsertId();
    }

    public function selectAll(int $id): array
    {
        $query = 'SELECT * FROM games WHERE idHostAccount=:idHostAccount';
        $this->executeQuery($query, array(':idHostAccount' => array($id, PDO::PARAM_INT))));

        $resultats = $this->getResults();
        if ($resultats == NULL) { //Si on n'as aucun news dans la base de données
            $Tab_All[] = NULL;
            return $Tab_All;
        }
        foreach ($resultats as $row) {
            $Tab_All[] = new Games($row['id'], $row['date'], $row['idHostAccount']);
        }
        return $Tab_All;
    }

    public function FindById(int $id): array
    {
        //preparation et execution de la requete sql (A APPRENDRE)
        $query = 'SELECT * FROM games WHERE id=:id';
        $this->executeQuery($query, array(':id' => array($id, PDO::PARAM_INT)));

        //conversion en objets
        $resultats = $this->getResults();
        foreach ($resultats as $row) {
            $Table_De_Games[] = new Games($row['id'], $row['date'], $row['idHostAccount']);
        }
        return $Table_De_Games;

    }

}