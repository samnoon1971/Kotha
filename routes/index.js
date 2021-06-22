const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message: 'alive'});
})
module.exports = router;