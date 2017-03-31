angular.
  module('makoletList').
  component('makoletList', {
    templateUrl: 'app/makolet-list/makolet-list.template.html',
    controller: ['sharedProperties', function makoletListController(sharedProperties) {
        this.makoletList = findGetParameter();
        sharedProperties.field = this.makoletList;
      }
    ]
  });
  
  
function findGetParameter() {
  var result = [];
  /*var items = location.search.substr(1).split("&");
  for (var index = 0; index < items.length; index++) {
    var item = {name: decodeURIComponent(items[index])};
    result.push(item);
  }*/
  console.log(result);
  return result;
}