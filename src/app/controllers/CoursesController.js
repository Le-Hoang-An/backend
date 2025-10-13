const Course = require("../models/Course");

class CoursesController {
  // GET /
  async index(req, res) {
    try {
      const coursesData = await Course.find({});
      const courses = coursesData.map((course) => course.toObject());
      res.render("home", {
        courses: courses,
      });
    } catch (err) {
      console.error("Error fetching courses:", err);
      res.status(400).json({ error: "ERROR!!!" });
    }
  }

  async show(req, res) {
    try {
      const course = await Course.findOne({ slug: req.params.slug });
      if (!course) {
        return res.status(404).send("Course not found");
      }
      res.render("courses/show", {
        course: course.toObject(),
      });
    } catch (err) {
      console.error("Error fetching course:", err);
      res.status(400).json({ error: "ERROR!!!" });
    }
  }
}

module.exports = new CoursesController();
