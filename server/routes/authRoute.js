const express = require("express");
const { createAccount, loginAccount, logoutAccount } = require("../controllers/authController");

const router = express.Router();

router.route("/createAccount").post(createAccount);
router.route("/loginAccount").post(loginAccount);
router.route("/logoutAccount").get(logoutAccount);

module.exports = router;
