const express = require('express');
const router = express.Router();
const Gladiator = require('../models/gladiator');
const Fight = require('../models/fight');

// Get a list of fights from the db
router.get('/fights', function(req, res, next){
    Fight
        .find(req.body)
        .then(function(fight){
            res.send(fight);
        }).catch(next);
});

// Get a list of fights from the db
router.get('/fights/nextfights', function(req, res, next){
    Fight
        .find(req.body)
        .then(function(fight){
            res.send(fight);
        }).catch(next);
});

// Get a first fight element "à venir" in the db
router.get('/fights/first', function(req, res, next){
    Fight
        .findOne({state: 'à venir'}, {})
        .then(function(fight){
            res.send(fight);
    }).catch(next);
});

// Add a new fight to the db
router.post('/fights', function(req, res, next){
    Fight
        .create(req.body)
        .then(function(fight){
            res.send(fight);
    }).catch(next);
});

// Update a fight in the db
router.put('/fights/:id', function(req, res, next){
    Fight
        .findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(function(){
            Fight
                .findOne({_id: req.params.id})
                .then(function(fight){
                    res.send(fight);
            });
    }).catch(next);
});

// Delete a fight from the db
router.delete('/fights/:id', function(req, res, next){
    Fight
        .findByIdAndRemove({_id: req.params.id})
        .then(function(fight){
            res.send(fight);
    }).catch(next);
});

// Get a list of gladiators from the db
router.get('/gladiators', function(req, res, next){
    Gladiator
        .find(req.body)
        .then(function(gladiator){
            res.send(gladiator);
    }).catch(next);
});

// Get a list of names per type from the db
router.get('/gladiators/nameBytype', function(req, res, next){
    Gladiator
        .find({},{type: 1,name: 1,weapon: 1,available:1})
        .then(function(gladiator){
            res.send(gladiator);
    }).catch(next);
});

// Get a list of animal names from the db
router.get('/gladiators/animals', function(req, res, next){
    Gladiator
        .find({type: 'Animal'},{name: 1})
        .then(function(gladiator){
            res.send(gladiator);
    }).catch(next);
});

// Get a list of archers names from the db
router.get('/gladiators/archers', function(req, res, next){
    Gladiator
        .find({type: 'Archer'},{name: 1})
        .then(function(gladiator){
            res.send(gladiator);
    }).catch(next);
});

// Get a list of knights names from the db
router.get('/gladiators/knights', function(req, res, next){
    Gladiator
        .find({type: 'Cavalier'},{name: 1})
        .then(function(gladiator){
            res.send(gladiator);
    }).catch(next);
});

// Get a list of swordsmen names from the db
router.get('/gladiators/swordsmen', function(req, res, next){
    Gladiator
        .find({type: 'Epéiste'},{name: 1})
        .then(function(gladiator){
            res.send(gladiator);
    }).catch(next);
});

// Get a list of lancers names from the db
router.get('/gladiators/lancers', function(req, res, next){
    Gladiator
        .find({type: 'Lancier'},{name: 1})
        .then(function(gladiator){
            res.send(gladiator);
    }).catch(next);
});

// Get a list of gladiators types from the db
router.get('/gladiators/type', function(req, res, next){
    Gladiator.distinct('type')
        .then(function(gladiator){
            res.send(gladiator);
    }).catch(next);
});

// Add a new gladiator to the db
router.post('/gladiators', function(req, res, next){
    Gladiator
        .create(req.body)
        .then(function(gladiator){
            res.send(gladiator);
    }).catch(next);
});

// Update a gladiator in the db
router.put('/gladiators/:id', function(req, res, next){
    Gladiator
        .findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(function(){
            Gladiator
                .findOne({_id: req.params.id})
                .then(function(gladiator){
                    res.send(gladiator);
            });
    }).catch(next);
});

// Delete a gladiator from the db
router.delete('/gladiators/:id', function(req, res, next){
    Gladiator
        .findByIdAndRemove({_id: req.params.id})
        .then(function(gladiator){
            res.send(gladiator);
    }).catch(next);
});

module.exports = router;