const express = require("express");
var ObjectId = require('mongoose').Types.ObjectId;

const User = require("../model/user");

const router = express.Router();
router.post("/login",(req, res, next) => {
  let fetchedUser;
  console.log(req.body.name);
User.findOne({ name: req.body.name })
  .then(user => {

    if(!user){
      return res.status(401).json({
        message: 'Auth failed'
      });
    }
    fetchedUser=user;
    if(req.body.password == user.password)
    {
      return true;
    }
    else{
      return false;
    }
  })
  .then(result => {
    console.log(result);
    if (!result) {
      return res.status(401).json({
        message: "Auth failed"
    });
  }
  res.status(200).json({
    user:fetchedUser
  });
  })
  .catch(err => {
    console.log(err);
    return res.status(401).json({
      message: "Auth failed"
    });
  })
});


router.get("/:name", (req, res, next) => {
  User.findOne({name:req.params.name}).then(document => {
    res.status(200).json({
      message: "Inventory fetched successfully based on category!",
      user: document
    });
  });
});

module.exports = router;
