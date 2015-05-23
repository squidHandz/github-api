app.controller('myCtrl', function($scope, gitService) {


function formatResults(res){
	return {
		Name: res.name,
		UserID: res.login,
		From: res.location,
		Avatar: res.avatar_url
	}
}


$scope.getUserData = function(username){
	username = $scope.searchText;  
    gitService.getUser(username)
      .then(function(res){
      	$scope.user = formatResults(res);
      	$scope.searchResults = !$scope.searchResults;
       })
  }

});	