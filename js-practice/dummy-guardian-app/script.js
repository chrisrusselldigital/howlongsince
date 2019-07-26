

var request = new XMLHttpRequest();
request.open('GET', 'https://content.guardianapis.com/search?from-date=2019-01-01&to-date=2019-01-31&q=brexit&show-fields=bodyText&api-key=0c97ec6a-be97-41fb-b9e3-2dfbaf1635a5', true);

request.onload = function () {
  var data = JSON.parse(this.response);

  var content = data.response.results;

    //  var text = document.getElementById('content');

    //  text.innerHTML = (content[0]['fields']['bodyText']);

    for (var i = 0; i < data.length; i++) {
      var obj = data[i]
      console.log(obj.id);
    }


}

request.send();
