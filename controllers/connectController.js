let session = require('express-session');
let express = require('express');

var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'testexam',
})
connection.connect(function(error) {if (error) console.log(error);});


exports.pageConnection = function(request, response) {
    response.render('connect.ejs');

};



exports.connectSession = function(request, response)  {  //ici on enregistre dans la session le user défini dans l'url
        request.session.user = request.body.Pseudo;
        console.log(request.session);
        response.render('connect.ejs')//attention, mettre une réponse!!!!!!!
        //response.redirect('/'); // redirection vers la page de base.
};

exports.addMail = function(request, response) {
    let currentUser = request.session.user
    
    request.session.mail = request.body.Mail
    console.log(request.session);
    connection.query("INSERT INTO connection(Pseudo, Mail) VALUES(?, ?)  ", [currentUser, request.session.mail],   function(error, result){ 
        if (error) console.log(error);
    });
    response.redirect('/')

}