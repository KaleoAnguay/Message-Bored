/*jshint esversion: 6 */
const express = require('express');
const topics = express.Router();
const { Topic, User } = require('../../models');

topics.get('/', (req, res) => {
  Topic.all({
    include: [
      {
        model: User,
        as: 'Creator'
      }
    ]
  })
  .then( ( topics ) =>{
    res.json( topics );
  })
  .catch(err => {
    res.send(err);
  });
});

topics.post('/', (req, res) => {
  Topic.create( req.body )
    .then( topics => {
      res.json( topics );
    })
    .catch( err => {
      res.json( err );
    });
});

topics.put('/:id', (req,res) => {
  Message.all({
    inculde: [
      {
        model: User,
        as: 'Author',
        attributes: ['name']
      },
      {
        model: Topic
      }
    ]
  })
  .then(data => {
    res.json(data);
  });
});

topics.put('/:id', (req, res) => {
  Topic.update(
    { name : req.body.name },
    { where : { id : req.params.id } }
  )
  .then( result => {
    return Topic.findById( req.params.id );
  })
  .then( topic => {
    res.json( topic );
  })
  .catch( err => {
    res.json( err );
  });
});

module.exports = topics;