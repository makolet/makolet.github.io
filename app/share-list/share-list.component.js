"use strict";
angular.
  module('shareList').
  component('shareList', {
    templateUrl: 'app/share-list/share-list.template.html',
    controller: ['sharedProperties', '$scope', function shareListController(sharedProperties,$scope) {
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
        this.makoletList = sharedProperties.makoletList;
        
        var self = this;
        this.getUrl = function (forWhatsApp) {
          return encodeQueryData(self.makoletList, forWhatsApp);
        }; 
      }
    ]
  });
  




var url = 'https://makolet.github.io/';  
  
function encodeQueryData(data, forWhatsApp) {
  var ret = [];
  var finalUrl = "";
  var arrayLength = data.length;
  for (var i = 0; i < arrayLength; i++) {
    var itemObj = data[i];
    ret.push(itemObj.name);
  }
  
  var getArgs;
  if (forWhatsApp) {
    getArgs = ret.join(encodeURIComponent('&'));
  } else {
    getArgs = ret.join('&');
  }

  getArgs = getArgs.split(' ').join('_');
  
  if (isEmpty(getArgs)) {
    finalUrl = url;
  } else {
    finalUrl = url + '?' + getArgs;
  }
  return finalUrl;
}


function isEmpty(obj) 
{
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) 
    {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}
