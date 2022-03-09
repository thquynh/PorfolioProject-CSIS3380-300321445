const express = require('express');
const projects = require('./data.json');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render('index', { projects: projects });
});

app.get('/about', function (req, res) {
    res.render('about');
});


app.get('/project/:id', function (req, res) {
    const id = parseInt(req.params.id);

    const project = projects.filter(el => el.id === id);
    res.render('project', { project: project[0] });
});

app.listen(3000, function () {
    console.log("server started on port 3000")
});
