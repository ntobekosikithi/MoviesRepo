
app.factory('movieFactory', ['$http', function ($http) {
  // Public API here
  return {
    getSeries: function(){       
      return $http.get("https://api.themoviedb.org/3/discover/tv?api_key=c94431cab6597dab45a1c126e000512f&year=2016&sort_by=popularity.desc");               
    }
  };
}]);