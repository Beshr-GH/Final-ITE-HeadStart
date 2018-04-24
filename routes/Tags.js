var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose'),
    assert = require('assert');
var Projects = require('../models/ProjectModel.js');
var Schema = mongoose.Schema;
var tagsRouter = express.Router();
tagsRouter.use(bodyParser.json());
var MongoClient = require('mongodb').MongoClient;
var db = mongoose.connection;

tagsRouter.route('/:Tag')

    .get(function (req, res, next) {
        console.log('Searching by tag', req.params.Tag);

        Projects.find({ 'tags': req.params.Tags }, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);

        });

    })





module.exports = tagsRouter;