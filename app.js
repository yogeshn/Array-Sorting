var Data =
 [
  {

  "id": 1,

  "name": "Client ABC",

  "price": 12.50,

  "datetimes":{

  "updated":"2017-01-01T23:28:56.782Z",

  "lastexecuted":"2016-04-01T23:00:11.045Z"

  },

  "tags": ["this", "that", "other"]

  },
  {

  "id": 2,

  "name": "Client DEF",

  "price": 12.50,

  "datetimes":{

  "updated":"2016-01-01T23:28:56.782Z",

  "lastexecuted":"2016-04-01T23:29:11.047Z"

  },

  "tags": ["this", "that", "other"]

},
{
"id": 3,

"name": "Client 3",

"price": 10.50,

"datetimes":{

"updated":"2016-01-01T23:28:50.782Z",

"lastexecuted":"2016-08-01T23:29:11.047Z"

},

"tags": ["this", "that", "other"]

},
{
"id": 4,

"name": "Client 4",

"price": 120.50,

"datetimes":{

"updated":"2016-11-01T23:28:56.782Z",

"lastexecuted":"2016-11-01T23:29:11.047Z"

},

"tags": ["this", "that", "other"]

},
{
"id": 5,

"name": "Client 5",

"price": 812.50,

"datetimes":{

"updated":"2015-01-01T23:28:56.782Z",

"lastexecuted":"2015-04-01T23:29:11.047Z"

},

"tags": ["this", "that", "other"]

}


  ];
Object.defineProperty( Data, 'sortupdate', {
    get: function() {

        return this.concat()
            .sort( function(a,b) {
            var c= new Date(a.datetimes.updated);
            var d= new Date(b.datetimes.updated);


            return c-d;
          } );
    }
});


Object.defineProperty( Data, 'executeupdate', {
    get: function() {

        return this.concat()
            .sort( function(a,b) {
            var c= new Date(a.datetimes.lastexecuted);
            var d= new Date(b.datetimes.lastexecuted);

            return c-d;
          } );
    }
});



var sortedUpdate = Handlebars.compile( $('#sortedUpdate').html() );
var executeupdate = Handlebars.compile( $('#executeupdate').html() );

$('#sUpdate').html( sortedUpdate( Data ) );
$('#eUpdate').html( executeupdate( Data ) );
