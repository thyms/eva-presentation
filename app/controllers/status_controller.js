var actions = {
  index: function () {
    var status = [
      {
        name: "mySection1",
        properties: {
          myKey1: 'myValue1',
          myKey2: 'myValue2'
        }
      },
      {
        name: "mySection2",
        properties: {
          myKey3: 'myValue3',
          myKey4: 'myValue4'
        }
      }
    ];

    send({status: status});
  },
  show: function() {
    var status = []
    if (req.params.id) {
      status = [
        {
          name: "mySection1",
          properties: {
            myKey1: 'myValue1',
            myKey2: 'myValue2'
          }
        }
      ];
    }

    send({status: status});
  }
}

action('index', actions.index);
action('show', actions.show);