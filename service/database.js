const {MongoClient} = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

function getUser(name) {
    return userCollection.findOne({name: name});
}

function getUserByToken(token) {
    return userCollection.findOne({token: token});
}

async function createUser(name, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        name: name,
        password: passwordHash,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);

    return user;
}

async function addStreak(streak) {
    exist = await scoreCollection.findOne({name: streak.name});
    if (exist) {
        await scoreCollection.updateOne({name: streak.name}, {$set: {streak: streak.streak, practiceTimes: streak.practiceTimes}});
    } else {
        await scoreCollection.insertOne(streak);
    }
}

function getStreaks(){
    const query = {streak: {$gt: 0, $lt: 900}};
    const options = {
        sort: {streak: -1},
        limit: 10,
    };
    const cursor = scoreCollection.find(query, options);
    return cursor.toArray();
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addStreak,
    getStreaks,
};