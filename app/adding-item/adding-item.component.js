"use strict";
angular.
  module('addingItem').
    component('addingItem', {
      templateUrl: 'app/adding-item/adding-item.template.html',
      controller: ['$scope','sharedProperties',function addingItemController($scope, sharedProperties) {
          var self = this;
          self.makoletList = sharedProperties.makoletList;
          self.toHideErrorEmptyItem = true;
          self.addTheItem = function () {
              if (isEmpty(self.addedItem))
              {
                  self.toHideErrorEmptyItem = false;
                  return;
              }
              self.toHideErrorEmptyItem = true;
              var itemName = self.addedItem;
              var item = {name:itemName};
              self.makoletList.push(item);
              self.addedItem="";
          }

          sharedProperties.getContent().then(function(result) {
              $scope.content = result;
            }
          );
          $scope.language = sharedProperties.getPreferredLanguage(); 
        }
      ]
    }
  );
