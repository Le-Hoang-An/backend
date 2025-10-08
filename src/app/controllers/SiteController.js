//Get
class SiteController {
  index(req, res) {
    res.render("home");
  }
  search(req, res) {
    res.render("search");
  }
}
//get /:slug

module.exports = new SiteController();
