//Get
class NewsController {
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.send("News detail");
  }
}
//get /:slug

module.exports = new NewsController();
