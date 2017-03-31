angular.
  module('makoletList').
  component('makoletList', {
    templateUrl: 'app/makolet-list/makolet-list.template.html',
    controller: ['sharedProperties', function makoletListController(sharedProperties) {
        this.makoletList = findGetParameter();/*[
          {
            name: 'Nexus S'
            
          }, {
            name: 'Motorola XO'
          
          }, {
            name: 'MOTOROLA XO'
          
          }
        ];*/
        sharedProperties.field = this.makoletList;
      }
    ]
  });
  
  
function findGetParameter() {
  var result = [],
  tmp = [];
  var items = location.search.substr(1).split("&");
  for (var index = 0; index < items.length; index++) {
    var item = {name: decodeURIComponent(items[index])};
    result.push(item);
  }
  console.log(result);
  return result;
}