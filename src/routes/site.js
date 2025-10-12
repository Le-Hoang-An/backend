const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteController");

// Routes phải được định nghĩa theo thứ tự từ cụ thể đến chung
router.get("/search", siteController.search);
router.get("/", siteController.index);



module.exports = router;


