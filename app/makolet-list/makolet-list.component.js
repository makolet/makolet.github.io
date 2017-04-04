angular.
  module('makoletList').
  component('makoletList', {
    templateUrl: 'app/makolet-list/makolet-list.template.html',
    controller: ['sharedProperties', function makoletListController(sharedProperties) {
        var self = this;
        this.makoletList = findGetParameter();
        sharedProperties.field = this.makoletList;
        this.removeItem = function(item) {
          var index = self.makoletList.indexOf(item);
          if (index > -1) {
            self.makoletList.splice(index, 1);
          }
        }
      }
    ]
  });
  
function findGetParameter() {
  var result = [];
  var items = location.search.substr(1).split("&");
  
  for (var index = 0; index < items.length; index++) {
    var item = decodeURIComponent(items[index]);
    if (!isEmpty(item))
    {
      item = item.split('_').join(' ');
      var itemObj = {name: item};
      result.push(itemObj);
    }
  }
  console.log(result);
  return result;
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