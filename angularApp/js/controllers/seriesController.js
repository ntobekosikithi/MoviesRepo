angular.module('movies')
.controller('moviecontroller', ['movieFactory', function(movieFactory,$scope){
    var mc = this;

    mc.getAllSeries = function() {        
        var promise = movieFactory.getSeries();                 
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