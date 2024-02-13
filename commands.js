// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
use jaskis

// 2. Create a collection called bounties
db.createcollection('bounties')

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object

db.destinations.insertOne ({
    name: "Thanoceros",
    species: "Rhinoceros",
    location: "Grasslands",
    wantedFor: "Eating too much grass",
    client: "Songbird",
    reward: 10000,
    captured: false
  })

// 2. Query for all bounties in the bounties collection

db.destinations.find()

// 3. Insert many bounties at once using the given objects

db.destinations.insertMany([])

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands

db.destinations.find({ location: 'Grasslands'})

// 2. Query for all bounties with a reward worth 10000 or more

db.destinations.find({ reward: { $gte: 10000 } })

// 3. Query for all bounties, but exclude the client attribute from being shown

db.destinations.find({ client: { $ne: 'Red wolf' } })

// 4. Query for a Groundhog in the Woodlands

db.destinations.find( { $and: [ { species: 'Goundhog' }, { location: 'Woodlands'} ]} )

// Update and Delete
// 1. Update the reward for Polarwind to 10000

db.destinations.updateOne({
    _id: ObjectId('65c984d664aa914333c1ca18'),
    name: 'Polarwind',
    species: 'Polar Bear',
    location: 'Arctic',
    wantedFor: 'Not hibernating',
    client: 'Sabertooth',
    reward: 10000,
    captured: false
   })

// 2. Remove Lokinkajou

db.destinations.deleteOne({ name: 'Lokinkajou' })

// 3. Delete all bounties sent by Songbird

db.destinations.deleteMany({ client: 'Songbird' })

// 4. Update all captured statuses to true

db.destinations.updateMany({ $set: { captured: true } })