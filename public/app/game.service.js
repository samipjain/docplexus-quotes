'use strict'

angular.module('app').service('quoteService', function($http) {
	this.title = 'Quotes';
	this.author = {};

	this.getTitle = function() {
		return this.title;
	};

	this.saveAuthor = function(item) {
		this.author = item;
	};

	this.getAuthor = function() {
		return this.author;
	};

	this.getQuotes = function() {
		return $http.get('quotes.json');
	}
});