const { Router } = require('express');
const shoes = require('../shoes.json');
const router = Router();

router.get('/api/shoes', (req, res) => {
    res.send(shoes);
});

module.exports = router;