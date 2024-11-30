const express = require("express");
const { createAccount, loginAccount } = require("../controllers/authController");

const router = express.Router();

router.route("/createAccount").post(createAccount);
router.route("/loginAccount").post(loginAccount);

module.exports = router;
