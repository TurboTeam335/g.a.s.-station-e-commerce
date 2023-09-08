<?php

class Database {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    // Create record in a collection
    public function createRecord($collection, $data) {
        return $this->db->{$collection}->insertOne($data);
    }

    // Read a single record based on a query
    public function readOneRecord($collection, $query) {
        return $this->db->{$collection}->findOne($query);
    }

    // Read multiple records based on a query
    public function readRecords($collection, $query = []) {
        return $this->db->{$collection}->find($query)->toArray();
    }

    // Update a record based on a query
    public function updateRecord($collection, $query, $newData) {
        return $this->db->{$collection}->updateOne($query, ['$set' => $newData]);
    }

    // Delete a record based on a query
    public function deleteRecord($collection, $query) {
        return $this->db->{$collection}->deleteOne($query);
    }
}

?>
