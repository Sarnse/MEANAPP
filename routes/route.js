const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');



router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
    })
});

router.post('/contact/:id', (req, res, next)=>{

});

router.delete('/contact/:id', (req, res, next)=>{
    
});

module.exports = router;