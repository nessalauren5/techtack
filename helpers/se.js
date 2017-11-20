'use strict';
var stackexchange = require('stackexchange');

var options = { version: 2.2 };
var context = new stackexchange(options);

var filter = {
    key: 'Qm39ZmtPEs5vr2Noz48AEA((',
    pagesize: 3,
    sort: 'votes',
    order: 'asc'
};

function searchSE(query,callback){
    filter.title = query;
    // Get all the questions (http://api.stackexchange.com/docs/questions)
    context.search.advanced(filter, function(err, results){
        if (err) throw err;

        console.log(results);
        console.log(results.has_more);
        callback(err,results.items);
    });

}

module.exports.search = searchSE;