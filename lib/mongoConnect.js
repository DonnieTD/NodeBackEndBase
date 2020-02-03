const MongoClient = require('mongodb').MongoClient

var DBINSTANCE;

async function connectToMongo(uri,dbName,successMessage){
<<<<<<< HEAD
    await MongoClient.connect(uri,(err, client) => {
=======
    await MongoClient.connect(uri, {useUnifiedTopology: true},(err, client) => {
>>>>>>> fef9de29d4776fca8b3ca72370fc17f766f5758d
        
        if (err) return console.log(err)
        
        DBINSTANCE = client.db(dbName);

        console.log(successMessage)
    })
}

export{
    connectToMongo,
    DBINSTANCE
}
