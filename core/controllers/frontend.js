var express = require('express');
    models = require('../models'),
    Promise = require('bluebird'),
    config = require('../../config'),
    api = require('../api'),
    router = express.Router();


var frontend = {
  renderAddBook: function(req,res){
    var data = {};
    data.title = config.siteName;
    res.render('book-add', data);
  },
  handleAddBook: function(req, res){
    var data = {
      book_name: req.body.book_name,
      book_author: req.body.book_author,
      book_cover: req.body.book_cover,
      book_content: req.body.book_content
    };

    api.books.addBook(data).then(function(result){
      if(!result.error){
        res.redirect("/books/new");
      }else{
        res.send(result);
      }
    });
  },
  handleSignup: function(req, res){
    var data = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    };

    api.users.addUser(data).then(function(d){
      if(!d.error){
        res.redirect("/");
      }else{
        console.log(result);
        res.redirect("/signin?error="+result.error.code);
      }
    });
  },
  handleSignin: function(req, res){
    var data = {
      username: req.body.username,
      password: req.body.password
    };

    api.auth.signin(data).then(function(result){
      if(!result.error){
        var userinfo = {
          username: data.username
        }

        req.session.userinfo = userinfo;
        res.redirect("/");
      }else{
        console.log(result);
        res.redirect("/signin?error="+result.error.code);
      }
    });
  }
}

module.exports = frontend;
