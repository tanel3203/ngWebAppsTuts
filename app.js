  var app = angular.module('LunchCheck', []);
  app.controller('LunchCheckController', function($scope) {
      $scope.contentArray;
      $scope.enterMessage = function() {
        if ($scope.dataContent) {
          $scope.contentArray = $scope.dataContent.split(",");
          $scope.contentLength = $scope.contentArray.length;
          $scope.contentEmpty = $scope.contentArray[0].trim().replace(/"/gi,"").length;
        } else {
          $scope.contentArray = [];
          $scope.contentLength = 0;
          $scope.contentEmpty = 0;
        }
        
  
          if ($scope.contentEmpty == 0) {
            $scope.msg =  "Please enter data first";
          } else if ($scope.contentLength < 4) {

            $scope.msg = "Enjoy!";
          } else {
            $scope.msg = "Too Much!";
          }
       


      }
      
  });