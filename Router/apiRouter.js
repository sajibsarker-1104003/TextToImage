const router = require("express").Router();

const { PostData } = require('../Controller/apiController');



router.post('/', PostData);




module.exports = router;