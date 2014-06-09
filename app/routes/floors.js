/* jshint unused:false */

'use strict';

var mp = require('multiparty');
var traceur = require('traceur');
var Floor = traceur.require(__dirname + '/../models/floor.js');

exports.new = (req, res)=>{
  res.render('floors/new', {title: 'New Floor'});
};

exports.index = (req, res)=>{
  Floor.findAll(floors=>{
    res.render('floors/index', {floors:floors, title: 'Index'});
  });
};

exports.create = (req, res)=> {
  var form = new mp.Form();
  form.parse(req, (err, fields, files)=>{
    fields.photo = files.photo;
    Floor.create(fields, ()=>res.redirect('/floors'));
  });
};
