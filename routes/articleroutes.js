const router = require("express").Router();
const articleController = require("../controllers/articleController");

//get, post, delete routes for saved

router.route("/api/savedArticle")
  .post(articleController.create)
  .get(articleController.findAll);


router.route("/api/savedArticle/:id")
  .delete(articleController.remove);


module.exports = router;
