// public/js/app.js
app = angular.module('sampleApp', ['ngRoute','appRoutes','ngAnimate','MenuCtrl','UserCtrl','AddCtrl','HeadCtrl','ItemCtrl','ShowItemCtrl','ngDialog','file-model','angularFileUpload']);
 
 
 
app.service('shoppingCartService', function() {
         var productList = [];
         var grandTotal = 0;
 
         var addProduct = function(newObj) {
             productList.push(newObj);
             grandTotal = grandTotal + newObj.totalPrice;
           
         }
 
         var getProducts = function(){
             return productList;
         }
        
         var getGrandTotal = function(){
             return grandTotal;
         }
        
         var setQuantity = function(itemObj,plusMinus){
             
                if(plusMinus=="plus"){
                       for (var d=0;d<productList.length;d++) {
                            if (productList[d].productId == itemObj.productId) {
                                   productList[d].quantity = productList[d].quantity+1;
                                   productList[d].totalPrice = parseInt(productList[d].totalPrice)+parseInt(productList[d].price);
                                   grandTotal = grandTotal+parseInt(productList[d].price);
                            } 
                                   }
             
                     }else{
                             for (var d=0;d<productList.length;d++) {
                                   if (productList[d].productId == itemObj.productId) {
                                          productList[d].quantity = productList[d].quantity-1;
                                          productList[d].totalPrice = parseInt(productList[d].totalPrice)-parseInt(productList[d].price);
                                          grandTotal = grandTotal-parseInt(productList[d].price);
                                   } 
                                         }
                     }
          }
         
         var getQuantity = function(productId){
        	 for (var d=0;d<productList.length;d++) {
                 if (productList[d].productId == productId) {
                       return productList[d].quantity;
                       break;
                 }
        	 
         }
         }
        
         var removeProduct=function(item){
                var index=productList.indexOf(item);
                productList.splice(index,1);
                grandTotal = grandTotal - item.totalPrice;
         }
 
         return {
           addProduct: addProduct,
           getProducts: getProducts,
           getGrandTotal:getGrandTotal,
           removeProduct:removeProduct,
           setQuantity:setQuantity,
           getQuantity:getQuantity
         };
 
});
 
