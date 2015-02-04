// public/js/controllers/NerdCtrl.js
angular.module('HeadCtrl', []).controller('HeadController', function($scope,ngDialog,shoppingCartService) {
 
       $scope.tagline = 'Nothing beats a pocket protector!';
      
       $scope.products = shoppingCartService.getProducts();
      
      
       //month list for payment gateway page
       var months = [{"selectMonth":"01(Jan)"},{"selectMonth":"02(Fab)"},{"selectMonth":"03(Mar)"},
                     {"selectMonth":"04(Aprl)"},{"selectMonth":"05(May)"},{"selectMonth":"06(Jun)"},
                     {"selectMonth":"07(Jul)"},{"selectMonth":"08(Aug)"},{"selectMonth":"09(Sep)"},
                     {"selectMonth":"10(Oct)"},{"selectMonth":"11(Nov)"},{"selectMonth":"12(Dec)"}];
       $scope.monthList = months;
      
      
      
       // year list for payment gateway page
       var currentTime = new Date();
       var year = currentTime.getFullYear();
       var years = [{"selectYear":year}];
       for(var i=0;i<20;i++) {
              year = year+1;
              yearEntry = {"selectYear":year};
              years.push(yearEntry);
              }
       $scope.yearList = years;
      
      
      
       $scope.showCart = function() {
             
              $scope.grandTotal = shoppingCartService.getGrandTotal();
              var dialog = ngDialog.open({
             template: 'views/shoppingCart.html',
             scope: $scope,
             className: 'ngdialog-theme-default'
           });
       };
       
       $scope.counterPlus = function(itemObj){
           shoppingCartService.setQuantity(itemObj,"plus");
           $scope.grandTotal = shoppingCartService.getGrandTotal();
          
       };
       
       $scope.counterMinus = function(itemObj){
           shoppingCartService.setQuantity(itemObj,"minus");
           $scope.grandTotal = shoppingCartService.getGrandTotal();
       };
      
      
       $scope.removeFromCart = function(item) {
              shoppingCartService.removeProduct(item);
              $scope.grandTotal = shoppingCartService.getGrandTotal();
       };
      
      
      
       $scope.submitOrder = function() {
              alert(JSON.stringify($scope.products));
       };
      
});
 