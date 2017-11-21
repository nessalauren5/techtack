const request = require("request");

function searchWiki(query,callback){
    var q = encodeURIComponent(q);
    var url =
        "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + q + "&format=json";

    request.get(url, function(error, response, body){
            if (error){
                console.log(err);
                callback(error, body);
            }
            else{
                var json = JSON.parse(body);
                callback(error, json);
            }




    });

}

module.exports.search = searchWiki;