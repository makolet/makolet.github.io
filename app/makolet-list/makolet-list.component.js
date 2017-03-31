angular.
  module('makoletList').
  component('makoletList', {
    templateUrl: 'app/makolet-list/makolet-list.template.html',
    controller: ['$scope','sharedProperties', function makoletListController($scope, sharedProperties) {
        $scope.makoletList = [
          {
            name: 'Nexus S',
            
          }, {
            name: 'Motorola XO',
          
          }, {
            name: 'MOTOROLA XO',
          
          }
        ];
        sharedProperties.field = $scope.makoletList;
      }
    ]
  });