const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/example', (req, res) => {
  res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});


// const express = require('express');
// var app= express();

// app.set('view engine' ,'ejs');
// app.use('/assets',static('stuff'));

// app.get('/',function(req,res){
//     res.render('index');
// });

// app.get('/contact',function(req,res){
//     res.render('contact',{qs:req.query});
// });

// app.get('/profile/:name'.function(req.res){

// })

