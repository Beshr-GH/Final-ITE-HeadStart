var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose'),
    assert = require('assert');
var Projects = require('../models/ProjectModel.js');
var Schema = mongoose.Schema;
var ProjectRouter = express.Router();
ProjectRouter.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var db = mongoose.connection;

ProjectRouter.route('/:proname')

    .get(function (req, res, next) {
        console.log('Searching by Name', req.params.proname);

        Projects.find({ 'Project_Name': req.params.proname }, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);

        });

    })





module.exports = ProjectRouter;