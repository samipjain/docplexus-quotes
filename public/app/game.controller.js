'use strict'

angular.module('app').controller('quoteController', ['$scope', '$http', '$mdDialog', 'quoteService',
    function ($scope, $http, $mdDialog, quoteService) {
        var vm = this;
        
        vm.title = quoteService.getTitle();
        vm.showAdvanced = showAdvanced;        
        var init;        

        init = function() {            
            var temp = quoteService.getQuotes();
            temp.then(function(response) {
                console.log(response.data);
                vm.quotes_list = response.data;
            })
        };

        function showAdvanced(ev, author) {
            quoteService.saveAuthor(author);
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'author.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
        }

        function DialogController($scope, $mdDialog) {
            $scope.title = 'Hello';
            $scope.details = quoteService.getAuthor();

            $scope.hide = function() {
              $mdDialog.hide();
            };

            $scope.cancel = function() {
              $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
              $mdDialog.hide(answer);
            };
        }

        init();
    }
]);