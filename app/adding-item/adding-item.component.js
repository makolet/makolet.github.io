angular.
  module('addingItem').
    component('addingItem', {
      templateUrl: 'app/adding-item/adding-item.template.html',
      controller: ['$scope','sharedProperties',function addingItemController($scope, sharedProperties) {
          var self = this;
          self.addedItem = 'tamir adler';
          self.makoletList = sharedProperties.field;
          self.addTheItem = function () {
            var item = {name:''};
            item.name = self.addedItem;
            self.makoletList.push(item);
          }
          
        }
      ]
    }
  );
