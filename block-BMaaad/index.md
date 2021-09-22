writeCode

Write command to

- List collections from a database.
  show collections
- create a new collection in your country database which you created recently.
   db.createCollection('delhi')

Write code to:-

- crate a database named `weather`
  use weather
- create a capped collection named `temperature` with maximum of 3 documents and try inserting more than 3 to see the result.
   db.createCollection('temperature', {capped: true, size: 1024, max: 3})
    db.temperature.insertMany([{delhi: 34}, {mumbai: 32}, {chennai: 45}])
    db.temperature.find()
- create a simple collection named `humidity`
    db.createCollection('weather')
- check whether `temperature` collection is capped or not ?
  db.humidity.isCapped()
- Delete `humidity` collection and then the entire database(weather).
  db.humidity.drop()
