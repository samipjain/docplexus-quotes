angular.module('app').directive('author', function () {
	return {
		scope: {
	        author: '='
	    },
        restrict: 'E',        
        template: '<p><b>Name:</b> {{author.name}}</p>' +
                  '<p><b>Profession:</b> {{author.profession}}</p>' + 
                  '<p><b>Born:</b> {{author.born}}</p>' +
                  '<p><b>Dies:</b> {{author.died}}</p>' + 
                  '<p>{{author.intro}}</p>'
    };
});