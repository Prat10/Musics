const express = require('express');
const cors = require("cors");
const Controller=require('../controllers/Controller');
var router = express.Router();
router.use(cors());

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-control-Allow-Methods",
      "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
  });
router.route('/signup').post(Controller.signup);
module.exports = router;