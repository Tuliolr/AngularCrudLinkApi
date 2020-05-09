var express = require('express');
var router = express.Router();
var Veiculo = require('../models/dataSchema');

router.post('/create', (req, res, next)=>{
    var newVeiculo = new Veiculo({
        vehicle:req.body.name,
        brand:req.body.brad,
        year:req.body.year,
        description:req.body.description,
        created:req.body.created,
        updated:req.body.updated

    });
    newVeiculo.save((err,veiculo) => {
        if(err)
        res.status(500).json({ errmsg: err});
        res.status(200).json({ msg: veiculo});
    });

    
});

router.get('/read', (req, res, next)=> {
    Veiculo.find({},(err,veiculos)=> {
        if(err)
        res.status(500).json({ errmsg: err});
        res.status(200).json({ msg: veiculos});
    });
});

router.put('/update', (req, res, next)=>{
    
    Veiculo.findById(req.body_id, (err,veiculo)=> {
        if(err)
        res.status(500).json({ errmsg: err});

        veiculo.vehicle = req.body.vehicle;
        veiculo.brad = req.body.brad;
        veiculo.year = req.body.year;
        veiculo.description = req.body.description;
        veiculo.created = req.body.created;
        veiculo.update = req.body.update;
        veiculo.save((err, veiculo)=>{
            if(err)
            res.status(500).json({ errmsg: err});
            res.status(200).json({ msg: veiculo});

        });

    })
});

router.delete('/delete/:id', (req, res, next)=>{
   Veiculo.findOneAndRemove({_id:req.params.id},(err,veiculo)=>{
        if(err)
        res.status(500).json({ errmsg: err});
        res.status(200).json({ msg: veiculo});
   });
});

module.exports = router;