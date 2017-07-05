# Create javascript which queries for updates in realtime.

User can call 2 functions:

1) return an array sorted by last updated.

2) return an array sorted by last executed.


## Assumptions 
### JSON Object returned by API:
``` JSON

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


  
