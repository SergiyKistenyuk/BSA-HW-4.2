const route = require('express').Router();
const messageService = require('../../services/message');

route.get('/', (req, res) => {
    messageService.findAll((err, data) => {
        if (!err){
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

route.get('/:id', (req, res) => {
    messageService.findOne(Number(req.params.id), (err, data) => {
        if (!err){
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

route.post('/', (req, res) => {
    const obj = req.body;
    messageService.add(obj, (err, data) => {
        if (!err){
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

route.delete('/:id', (req, res) => {
    messageService.findOneAndDelete(Number(req.params.id), (err, data) => {
        if (!err){
            res.data = data;
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

route.put('/:id', (req, res) => {
    const obj = req.body;
    messageService.findOneAndUpdate(Number(req.params.id), obj, (err, data) => {
        if (!err){
            res.json(res.data);
        } else {
            res.status(400);
            res.end();
        }
    });
});

module.exports = route;