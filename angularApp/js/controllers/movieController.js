angular.module('movies')
.controller('moviecontroller', ['movieFactory', function(movieFactory,$scope){
    var mc = this;

    mc.getAllMovies = function() {        
        var promise = movieFactory.getMovies();                 
        promise.then(   
            function(payload) { 
                console.log(payload.data.results);  
                mc.popularMovies=payload.data.results;
            },
            function() {
                         
            }                   
        )
        .catch(function(response) {
            console.error('An error occured', response.status, response.data);
        }); 
    }
}]);