action('index', function () {
  var status;
  if (req.params.section) {
    status = [
      {
        name: "mySection1",
        properties: {
          myKey1: 'myValue1',
          myKey2: 'myValue2'
        }
      }
    ];
  } else {
    status = [
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
  }

  send({status: status});
});
