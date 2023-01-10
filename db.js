const firebase = require('firebase')
const config = require('../config')

const database = firebase.initializeAPP(config.firebaseConfig)

module.exports = database;