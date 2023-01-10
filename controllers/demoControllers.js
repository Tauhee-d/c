const firebase = require('../db')
const Demo = require('../models/demo')
const firestore = firebase.firestore()

const addDemo = async(req,res,next) => {
    try {
        const data = req.body
         await firestore.collection('demos').doc().set(data)
        res.send('success')
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {addDemo}