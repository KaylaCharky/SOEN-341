const router = require('express').Router();
let Picture = require('../models/picture.model');


router.route('/').get((req,res) =>{
    User.find()
    .then(pictures => res.json(pictures))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add-pic').post((req,res) => {
    const url = req.body.url;

    const newPicture = new Picture({url});

    newPicture.save()

    .then(() => res.json('Picture added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;