# Instructions

this is an samplenodejs repo that demonstrates how to easily you can migrate your application code writing to a MongoDB backend to switch over to Stargate enabled Astra cluster


## Setup

to run this code you need

 - a nodejs editor like Visual Studio Code
 - a running installation of MongoDB
 - a running cluster on Datastax Astra
 - nodejs binaries installed on your laptop

## Steps for running the test

change the mongo_dao.js file to point to your MongoDB endpoint

    var  url = "mongodb://<mongo_host>:27017/";

change the stargate_dao.js to point  your Stargate Document API enabled Astra instance

    const  clusterId = `<astra_cluster_id>`;
    
    const  region = `<astra_cluster_region>`;
    
    const  baseUrl = `https://`+clusterId+`-`+region+`.apps.astra.datastax.com`
    
    const  username = `astra_username`;
    
    const  password = `astra_password`;
    
    const  namespace = `astra_keyspace`;
the main executable is **app.js** - to run this file execute `node .\app.js`
to switch the target database beween MongoDB and Astra, as well as to change the CRUD operation to be performed, change the following lines of code in app.js file

    //set the target database. valid options are MONGO and STARGATE
    const  db_target = "STARGATE";
    //set the desired operation. valid options are READ,INSERT,UPDATE, and DELETE
    const  db_operation = "DELETE";
