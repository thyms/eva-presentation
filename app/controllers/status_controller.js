action('show', function(){
  var keys = {myKey: {myInnerKey: "myValue"}};
  res.format({
    html: function() {
      compound.logger.write("status#show.default: " + JSON.stringify(keys));
      layout('admin');
      render({title: 'Eva Presentation Status', keys: keys});
    },
    json: function() {
      compound.logger.write("status#show.json: " + JSON.stringify(keys));
      send({keys: keys});
    }
  });
});
