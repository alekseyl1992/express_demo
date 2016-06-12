var express = require('express');
var router = express.Router();

function getPosts(cb) {
  var posts = [{
      author: 'Vasja',
      text: 'Some text'
    }, {
      author: 'Masha',
      text: 'Some other text'
    }];
  cb(null, posts);
}


router.get('/', function(req, res, next) {
  getPosts(function (err, posts) {
    res.render('index.hbs', {
      title: 'Express',
      posts: posts
    });
  });
});

module.exports = router;
