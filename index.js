// this can be used as boilerplate
const express = require("express");
const app = express();
const path = require('path');
const method = require('method-override')

app.use(express.static('public')); // serves all files in public folder as static/shared
app.use(express.urlencoded({extended:true})); // use middleware to parse body as urlencoded data for form data
app.use(express.json()); // this is to parse any json data payloads
app.use(method('_method')); // this overrides any methods to allow express to make CRUD opperations

app.set('views',path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    res.render('home')
})

// app.get('/home',(req, res) => {
//     res.render('index')
// })

app.listen(3000, () => {
    console.log('listening on port:3000')
});