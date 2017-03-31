
var myApp = angular.module('makoletApp')

myApp.factory('sharedProperties', function(){
  return { field: [] };
});

myApp.config(function($compileProvider){
   //other configuration code here
   $compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp):/);
})