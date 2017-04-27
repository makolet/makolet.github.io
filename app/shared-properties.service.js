"use strict";
var myApp = angular.module('makoletApp')

var sharedProperties = myApp.factory('sharedProperties', function($http){
    var content = {};
    var contentPromis = $http.get("content/content.json"); 
    var language = populatelanguage();
    console.log(language);
    alert(language.val);

    return { 
      makoletList: [],
      
      getPreferredLanguage: function(){
        return language;
      },
      
      setPreferredLanguage: function(lang){
        language.val = lang;
      },

      getContent: function() {
        return contentPromis.then(function(response) {
            console.log("call http!!!!!!!");
            content.content = response.data;
            return response.data;
         }) 
      }      
    };
  }
);




function populatelanguage() {
    var language = {val: "en"};
    var lan = getCookie("language");
    console.log("populatelanguage " + lan);
    if (isEmpty(lan)) {
        lan = window.navigator.userLanguage || window.navigator.language;
        setCookie("language",lan,365);
    }
    language.val = lan;
    return language;
}



function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


myApp.config(['$compileProvider','$httpProvider', function($compileProvider, $httpProvider){
   //other configuration code here
   $compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp):/);

   $httpProvider.defaults.useXDomain = true;
   delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

