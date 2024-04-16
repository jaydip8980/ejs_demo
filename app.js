const express = require("express");
const app = express();
const port = 3000;

// stactis files 

app.use(express.static("public"));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/images'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));

// tempaleting engine

app.set('view engine', 'ejs');
app.set('views', './src/views');

// routes setup

const routes = require('./src/routes/web');

app.use('/', routes);

// lisern port 3000


app.listen(port, () => console.log(`listening on port ${port}`));

