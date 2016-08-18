trig.factory("CalculatorFactory", function(){
  return {
    calculate: function(sideA, sideB) {
      return Math.hypot(sideA, sideB);
    }
  }
})
