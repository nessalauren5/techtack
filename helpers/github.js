var githubAPI = require('github');
var github = new githubAPI();

var params = {
    q : "helloworld",
    page : 1,
    per_page : 4
};

function searchGH(query,callback){
    params.q = query;
    // Get all the questions (http://api.stackexchange.com/docs/questions)

    github.search.repos(params,function(err,results){
        console.log(err);
        console.log(results.data.items);
        callback(err,results.data.items);
    });

}

module.exports.search = searchGH;