var express = require('express');
var router = express.Router();

var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://dazzling-heat-3053.firebaseio.com/");

router.get('/post1', function(req, res, next) {
  myFirebaseRef.child("post 1").on("value", function(snapshot) {
    res.render('blogposts', { title: snapshot.val() } );
  });
});

module.exports = router;
