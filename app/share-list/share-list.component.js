angular.
  module('shareList').
  component('shareList', {
    templateUrl: 'app/share-list/share-list.template.html',
    controller: ['sharedProperties', function shareListController(sharedProperties) {
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent); 
      }
    ]
  });