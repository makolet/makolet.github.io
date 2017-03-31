angular.
  module('shareList').
  component('shareList', {
    templateUrl: 'app/share-list/share-list.template.html',
    controller: ['sharedProperties', function shareListController(sharedProperties) {
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
        this.makoletList = sharedProperties.field;
        var url = 'https://makolet.github.io/'; 
        var self = this;
        this.getUrl = function () {
          return url + encodeQueryData(self.makoletList);
        }; 
      }
    ]
  });
  
  
  
function encodeQueryData(data) {
  
  var arrayLength = data.length;
  for (var i = 0; i < arrayLength; i++) {
    alert(data[i]);
    var itemObj = data[i];
    ret.push(encodeURIComponent(itemObj.name));
  }
  
  return ret.join('&');
}