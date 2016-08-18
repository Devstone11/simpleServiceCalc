trig.controller("TrigController", function($scope, CalculatorFactory){
  $scope.calculate = function() {
    $scope.hypotenuse = CalculatorFactory.calculate($scope.sideA, $scope.sideB)
  }
});
