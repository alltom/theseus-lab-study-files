var express = require('express');
var app = express();
var items = [];

items.push({
    id: 1,
    name: 'Shovel',
    description: 'A great thing for all to have'
});
items.push({
    id: 2,
    name: 'Basket',
    description: 'Another great thing for people to have'
});

app.use(express.static(__dirname + '/public'));

app.get(/^\/items\/([0-9]+)$/, function(req, res){
    var item = items.filter(function (i) { return i.id == req.params[0] })[0];
    if (item) {
        setTimeout(function () { res.send(item) }, 2000 + Math.random() * 1000);
    } else {
        res.send('not found');
    }
});

app.listen(3000);
