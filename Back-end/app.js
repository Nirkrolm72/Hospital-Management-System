const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();

// Body-Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuration handlebars
app.engine('.hbs', engine({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', './views');

// Route fichier static
app.use('/assets', express.static('public'));

// Routes
app.get('/', function(req, res){
    res.render('home');
});




// Le serveur écoute sur le port 3000
app.listen(3000, () => {
    console.log(`Le serveur est lancé sur le port 3000`);
});