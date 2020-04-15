const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

// Read -- .select().from()
router.get('/', (req,res) => {
  db('cars')
    .then(cars => {
      res.status(200).json(cars); 
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to retrive cars', error });
    });
});

// Read -- .select().from()
router.get('/:id', (req,res) => {
  const { id } = req.params;

  db('cars')
    .where({id})
    .then(car => {
      if (car) {
        res.status(200).json(car);
      } else {
        res.status(404).json({ message: 'Invalid id' }); 
      } 
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to retrive car by id', error });
    });
});

// Creat -- .insert()
router.post('/', (req,res) => { 
  const postData = req.body;

  db('cars')
    .insert(postData)
    .then(car => {
      if (car) {
        res.status(201).json({ carID: car}); 
      } else {
        res.status(404).json({ message: 'Car not added' }); 
      }
    })
    .catch(error => {
      res.status(500).json({ messgae: 'Failed to add car', error });
    });
});

// Update -- .update()
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  db('cars')
  .where({id})
  .update(updates)
  .then(count => {
      if (count) {
          res.json({ updated: count })
      } else {
          res.status(404).json({message: 'Invalid id'})
      }
  })
  .catch(err => {
      res.status(500).json({message: 'Failed to update car'})
  })
})

// Delete -- .del()
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db('cars')
  .where({id})
  .del()
  .then(count => {
      if (count) {
          res.status(200).json({ deleted: count })
      } else {
          res.status(404).json({message: 'Invalid id'})
      }
  })
  .catch(err => {
      res.status(500).json({message: 'Failed to delete car'})
  })
})

module.exports = router; 