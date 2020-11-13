
const mongo_dao = require("./mongo_dao");
const stargate_dao = require("./stargate_dao");
const fs = require('fs');

//set the target database. valid options are MONGO and STARGATE
const db_target = "STARGATE";

//set the desired operation. valid options are READ,INSERT,UPDATE, and DELETE

const db_operation = "DELETE";


//load insertion data from file
var rawdata = fs.readFileSync('jsonfiles/airline_10.json');
var airline_insert = JSON.parse(rawdata);
var airline_id = 10;

//load update data from file
rawdata = fs.readFileSync('jsonfiles/airline_10_update.json');
var airline_update = JSON.parse(rawdata);


if (db_target == "MONGO") {
    if (db_operation == "INSERT") {
        mongo_dao.insert(airline_insert, airline_id)
    }
    else if (db_operation == "READ") {
        mongo_dao.find(airline_id)
    }
    else if (db_operation == "UPDATE") {
        mongo_dao.update(airline_id, airline_update)
    }
    else if (db_operation == "DELETE") {
        mongo_dao.delete_document(airline_id)
    }
}
else if (db_target == "STARGATE") {

    if (db_operation == "INSERT") {
        stargate_dao.insert(airline_insert, airline_id)
    }
    else if (db_operation == "READ") {
        stargate_dao.find(airline_id)
    }
    else if (db_operation == "UPDATE") {
        stargate_dao.update(airline_id, airline_update)
    }
    else if (db_operation == "DELETE") {
        stargate_dao.delete_document(airline_id)
    }
}
else {
    console.log("ERROR : UNKNOWN TARGET DB")
}









