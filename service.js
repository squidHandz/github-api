app.service('gitService', function($http, $q){
var id = "45eaab4347ea5cf33ac1";
var sec = "15e47e5ffcbf821d0cfb40c62fba8eceb088fc7a";
var param = "?client_id=" + id + "&client_secret=" + sec;

this.getUser = function(username){
	var deferred = $q.defer();
    var url = 'https://api.github.com/users/' + username + param
        $http.get(url)
        .then(function(data){
        var res = data.data
        deferred.resolve(res);
    });
    return deferred.promise;
  }




});