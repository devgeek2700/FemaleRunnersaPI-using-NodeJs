const express = require('express');
const FemaleRank = require('../models/runner');

const router = new express.Router();

// Create API using POST
router.post("/runner", async(req, res) =>{
    try{
        const CreateRunner = new FemaleRank(req.body);
        console.log(req.body);
        const createwait = await CreateRunner.save();
        res.status(201).send(createwait);

    }catch(error){
        res.status(400).send(error);   
    }
});


// Read API using POST
router.get("/runner", async(req, res) =>{
    try{
        const ReadRunner = await FemaleRank.find().sort({Ranking:1});
        console.log(req.body);
        res.status(201).send(ReadRunner);

    }catch(error){
        res.status(400).send(error);   
    }
});


// Update API using PATCH
router.patch("/runner/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const UpdateRunner = await FemaleRank.findByIdAndUpdate(_id, req.body,{
            new: true
        } );
        console.log(UpdateRunner);
        res.status(201).send(UpdateRunner);

    }catch(error){
        res.status(400).send(error);   
    }
});


// Delete API using DELETE
router.delete("/runner/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        // const userDelete = await User.findByIdAndDelete(_id);
        const DeleteRunner = await FemaleRank.findByIdAndDelete(_id);
        console.log(DeleteRunner);
        res.status(201).send(DeleteRunner);

    }catch(error){
        res.status(400).send(error);   
    }
});


module.exports = router;