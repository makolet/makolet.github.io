angular.
  module('makoletList').
  component('makoletList', {
    templateUrl: 'app/makolet-list/makolet-list.template.html',
    controller: ['sharedProperties', function makoletListController(sharedProperties) {
        this.makoletList = [
          {
            name: 'Nexus S',
            
          }, {
            name: 'Motorola XO',
          
          }, {
            name: 'MOTOROLA XO',
          
          }
        ];
        sharedProperties.field = this.makoletList;
      }
    ]
  });