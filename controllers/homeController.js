

let express = require('express');
var mysql = require('mysql');






exports.showHome = function(req, res) {
    //let formation = new Formation("Nomformation, Prix, Debut, Fin, Inscrits")
    
    res.render('home.ejs')
    };

