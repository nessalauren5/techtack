var express = require('express');
var router = express.Router();
var pg = require('pg');
var format = require('pg-format');
var PGUSER = 'postgres';
var PGDATABASE = 'techtack';
const fs = require('fs');
const { Pool, Client } = require('pg');
const https = require('https');

//
// // convert excel sheet to json
// const convertExcel = require('excel-as-json').processFile;
// convertExcel('public/images/alltools.xlsx','row.json');
// var file = fs.readFileSync('row.json', 'utf8');
// var json_obj = JSON.parse(file);

var config = {
    user: PGUSER, // name of the user account
    host: 'nessalauren.com',
    password: 'wordp@55',
    database: 'techtack', // name of the database
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
}
const client = new Client(config);
const pool = new Pool(config);
var options = {"options":{
    "searchPath":"tt_schema"}};

// pool.connect(function (err, client, done) {
//     if (err) console.log(err);
//     else
//     {
//         myClient = client;
//         var searchQuery = format('SELECT distinct(title), from records ORDER BY title desc;');
//         console.log("issuing query: " + searchQuery);
//         myClient.query(searchQuery, function (err, result) {
//             if (err) {
//                 console.log(err);
//             }else {
//                 console.log(result.rows.length);
//                 results = result.rows;
//                 var values = [];
//                 results.forEach(function (row) {
//                     var toolname = row.title;
//                     values.push(
//                         {value:toolname,
//                             expressions:[toolname,toolname.toLowerCase()]
//                         });
//                 });
//                 var entries = {doc:"Tools",values:values};
//                     console.log(JSON.stringify(entries));
//                var postentreq = https.request({
//                     host:'api.wit.ai',
//                     path:'/entities/tool?v=201703',
//                     headers: {"Authorization": "Bearer EMHECMMIQ3OL537ROQTJNMUCEAD4EC5J"  , "Content-Type": "application/json"},
//                     method:'PUT'},function(res){
//                     console.log(res.statusCode + " " + res.statusMessage);
//
//                 });
//                postentreq.write(JSON.stringify(entries));
//                 postentreq.on('error', function (e) {
//                     // General error, i.e.
//                     //  - ECONNRESET - server closed the socket unexpectedly
//                     //  - ECONNREFUSED - server did not listen
//                     //  - HPE_INVALID_VERSION
//                     //  - HPE_INVALID_STATUS
//                     //  - ... (other HPE_* codes) - server returned garbage
//                     console.log(e);
//                 });
//                postentreq.end();
//             }
//         });
//     }
// }   );

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('search', { title: 'Express' });
});


/* GET users listing.*/
router.get('/autoComplete', function(req, res, next) {

    var searchterm = req.query.searchItem.toLowerCase();
    console.log("issuing query: " + searchterm);
    var myClient;
    var results = [];
    pool.connect(function (err, client, done) {
        if (err) console.log(err);
        else
        {
            myClient = client;
            // var searchQuery = format('SELECT title, similarity(\''  + searchterm +'\', LOWER(title)) as sml FROM records WHERE similarity(\''+searchterm+'\', LOWER(title)) > .2 ORDER BY sml desc, title LIMIT 100');
            var searchQuery = format('SELECT title, category,  similarity(\''  + searchterm +'\', LOWER(title)) as sml from records WHERE to_tsvector(COALESCE(title, \'\') || \' \' || COALESCE(description, \'\')) @@ to_tsquery(\'' + searchterm + ':*\') ORDER BY sml desc;');
            console.log("issuing query: " + searchQuery);
            myClient.query(searchQuery, function (err, result) {
                if (err) {
                    console.log(err);
                }else {
                    console.log(result.rows.length);
                    results = result.rows;
                    res.json( results);
                }
            });
        }
    }   );

});

router.get('/search', function(req, res, next){

    var searchterm = req.query.q.toLowerCase().split(",");
    console.log("issuing query: " + searchterm);
    pool.connect(function (err, client, done){
        if (err) console.log(err);
        else {
            myClient = client;
            // var searchQuery = format('SELECT title, similarity(\''  + searchterm +'\', LOWER(title)) as sml FROM records WHERE similarity(\''+searchterm+'\', LOWER(title)) > .2 ORDER BY sml desc, title LIMIT 100');
            var searchQuery = format('SELECT title, description, related_terms, pseudonyms from records WHERE to_tsvector(COALESCE(title, \'\') || \' \' || COALESCE(related_terms, \'\') || COALESCE(pseudonyms, \'\') || COALESCE(description, \'\')) @@ to_tsquery(\'' + searchterm + ':*\') ORDER BY title desc;');
            console.log("issuing query: " + searchQuery);
            myClient.query(searchQuery, function (err, result) {
                if (err) {
                    console.log(err);
                    res.render('results');
                }else {
                    console.log(result.rows.length);
                    results = result.rows;
                    res.json( results);
                }
            });
        }
    });
});
    module.exports = router;
