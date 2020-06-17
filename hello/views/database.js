var express = require('express');

var app = express();

const sqlite3Handler = require('sqlite3').verbose();

let dbHandler = new sqlite3Handler.Database('system_db', (connecttionError)=>{
    if (connecttionError){
        console.log(connectionError.message)
    }
    else {
        console.log('connected to the database')
    }
});