const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const beerController = require('./controller/beerController');


const app = new express();

app.use(cors());
app.use(bodyParser.json());


// endpoints
app.post('/api/beers', beerController.create);
app.get('/api/beers', beerController.read);
app.put('/api/beers/:id', beerController.update);
app.delete('/api/beers/:id', beerController.delete);



const port = 4000;

app.listen(4000, () => {
    console.log(`I'm on port ${port}`)
})
