const dotenv = require('dotenv')
const assert = require('assert')

dotenv.config()

const {
    
    PORT,
    HOST_URL,
    HOST,
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env

assert(PORT, 'port must be specified')
assert(HOST, 'port must be specified')

module.exports = {
    url:HOST_URL,
    port:PORT,
    host:HOST,

    firebaseConfig:{

        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId:PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }
}