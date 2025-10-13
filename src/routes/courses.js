const express = require("express");
const router = express.Router();
const coursesController = require("../app/controllers/CoursesController");

router.get("/", coursesController.index);
router.get("/:slug", coursesController.show);

module.exports = router;


