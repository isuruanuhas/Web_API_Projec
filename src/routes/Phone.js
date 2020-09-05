const express = require('express');
const PhoneModel = require('../models/PhoneModel');
const router = express.Router();

router.get('/products', async (req,res)=>
{
    let phones = await PhoneModel.find();
    res.send(phones);
});