/*jshint esversion: 6*/
const express = require('express');
const topics = express.Router();
const { User, Topic, Message } = require('../../models');

topics.get('/', (req, res) => {
  Topic.all()
    .then(topics => {
      res.json(topics);
    });
});

topics.post('/', (req, res) => {
  Topic.create(req.body)
    .then( data => {
      res.json(data);
    })
    .catch( err => {
      res.send(err);
    });
});

topics.get('/:Topicname', (req, res) => {
  Topic.all({
    where: {
      name: req.params.Topicname
    }})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.send(err);
    });
});


module.exports = topics;