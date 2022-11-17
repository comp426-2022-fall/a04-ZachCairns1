#!/usr/bin/env node

import express from 'express';
import minimist from 'minimist';
import { roll } from './lib/roll.js';

let args = minimist(process.argv.slice(2));

const app = express();
const port = 5000 || args.port;

app.get('/app/', (req, res) => {
	res.send("200 OK");
})

app.get('/app/roll', (req, res) => {
	res.send(roll(6,2,1));
})

app.get('/app/roll/:sides/', (req, res) => {
	res.send(req.params.sides, 2, 1);
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
        res.send(req.params.sides, req.params.dice, 1);
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
	res.send(req.params.sides, req.params.dice, req.params.rolls);
})

app.use(function(req,res){
    res.status(404).send("404 NOT FOUND");
});

app.listen(port, () => {
	console.log("Server listening on port" + port)
});
