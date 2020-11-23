const express = require('express')

const db = require('../db/trees')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTrees()
    .then(treesArr => {
			res.json(treesArr)
		})
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
