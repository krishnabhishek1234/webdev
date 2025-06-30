const multer = require('multer');
const firebasestorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-a093d-firebase-adminsdk-fbsvc-c2280ce341.json');

const storage = firebasestorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName : 'drive-a093d.firebasestorage.app',
    unique : true,
})


const upload = multer({
    storage : storage,
})

module.exports = upload;