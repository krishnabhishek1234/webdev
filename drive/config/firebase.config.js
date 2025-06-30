const Firebase = require('firebase-admin');

const serviceAccount = require('../drive-a093d-firebase-adminsdk-fbsvc-c2280ce341.json');

const firebase = Firebase.initializeApp({
    credential : Firebase.credential.cert(serviceAccount),
    storageBucket : 'drive-a093d.firebasestorage.app'
})

module.exports = Firebase;