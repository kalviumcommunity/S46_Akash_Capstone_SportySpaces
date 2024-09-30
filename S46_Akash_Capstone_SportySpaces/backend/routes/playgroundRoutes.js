const express = require('express');
const router = express.Router();
const { getPlaygrounds, createPlayground, updatePlayground } = require('../controllers/playgroundController');

router.get('/get', getPlaygrounds);

router.post('/post', createPlayground);

router.put('/:id', updatePlayground);

module.exports = router;
