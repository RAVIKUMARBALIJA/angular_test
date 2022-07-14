(function(){
'use strict';
angular.module("nameCalculator",[])
.controller("nameCalculatorController",function($scope){
    $scope.name = "";
    $scope.totalNameValue = 0;

    $scope.displayNumeric = function(){
        var totalvalue = CalculateNumericValueForString($scope.name)
        $scope.totalNameValue = totalvalue
    };

    function CalculateNumericValueForString(string){
        var totalStringValue = 0;
        for(var i = 0;i<string.length;i++){
            totalStringValue+= string.charCodeAt(i);
        }
        return totalStringValue;
    };
});
})();