let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/signuplogin");

router.post("/userregister", Controllers.postsignup);

module.exports=router;