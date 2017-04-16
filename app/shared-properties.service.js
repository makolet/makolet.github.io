"use strict";
var myApp = angular.module('makoletApp')

var sharedProperties = myApp.factory('sharedProperties', function($http){
    var content = {};
    var contentPromis = $http.get("content/content.json"); 

    return { 
      makoletList: [],
      getContent: function() {
        return contentPromis.then(function(response) {
            console.log("call http!!!!!!!");
            content.content = response.data;
            return response.data;
         }) 
      },
      
    };
  }
);

myApp.config(['$compileProvider','$httpProvider', function($compileProvider, $httpProvider){
   //other configuration code here
   $compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp):/);

   $httpProvider.defaults.useXDomain = true;
   delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

