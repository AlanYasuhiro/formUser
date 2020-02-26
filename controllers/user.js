const User = require('../models/user');
const path = require('path');
const fs = require('fs');

const users = [];
exports.postAddUser = (req, res, next) => {
  res.json({message: 'Deu certo postAddUser'});
  // const product = new User(req.body.name, req.body.email, req.body.cpf);
  const {name, email, cpf} = req.query;
  // const name = req.body.name;
  // const email = req.body.email;
  // const cpf = req.body.cpf;
  console.log(name, email, cpf);
  const product = new User(name, email, cpf);
  product.save();
  // res.redirect('/'); 
}

exports.getUser = (req, res, next) => {
  // res.json({message: 'Deu certo getUser'});
  User.fetchAll((users) => {
    res.json(users);
    // console.log(users);
  });
}