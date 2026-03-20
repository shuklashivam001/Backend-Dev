const express = require("express");

const app = express();
const router = express.Router();

const {getAllStudents} = require("../controllers/studentControler");

router.get("/",getAllStudents);

module.exports = router;