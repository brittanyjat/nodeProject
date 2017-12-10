const axios = require('axios');


let beers = [];
let id = 0;

module.exports = {
    // create: ( req, res ) => {
    //     const { name, tagline, first_brewed, description, image_url, abv, ibu } = req.body;
    //     beers.push({ id, name, tagline, first_brewed, description, image_url, abv, ibu});
    //     id++;
    //     res.status(200).send( beers );
    // },

    read: (req, res) => {
        let promise = axios.get('https://api.punkapi.com/v2/beers');
        promise.then(response => {
            beers = response.data;
            res.status(200).send( beers );
        })
    },

    update: (req, res) => {
        let id = Number(req.params.id);
        let newList = beers.map((beer) => {
            return beer.id === id ? req.body : beer;
        })
        res.status(200).send( newList );
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        beerId = beers.findIndex( beer => beer.id == deleteId );
        beers.splice( beerId, 1);
        res.status(200).send( books );

    },
}