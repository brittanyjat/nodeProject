/* import React, { Component } from 'react'
import axios from 'axios'


class Volume extends Component {
    constructor(){
        super()

        this.state = {}
        }
    }

    componentWillMount(){
        let promise = axios.get('https://api.punkapi.com/v2/beers')
        promise.then = response => {
            this.setState({
                abv: response.data
            })
        }
    }

    filterByAbv(){
        let abv = this.refs.selectedAbv.value
        let promise = axios.get('https://api/punkapi.com/v2/beers?abv' + name)
        promise.then( response => {
            this.setState({
                beersToDisplay: response.data
            })
        })

    }



    render() {
        return(
            <div>
                <h1 className="abv">Alcohol By Volume</h1>
                <ul>
                    {this.state.abv.map(e => {
                        return <li>{e.abv}</li>
                    })}
                </ul>
            </div>
        )
    }


}

export default Volume;

/*
{
    name: "",
    tagline: "",
    birthday: "",
    description: "",
    imageUrl: "",
    AlcoholByVolume: 0,
    bitterUnit: 0,
    
}
// this.getBeers = this.getBeers.bind(this)
this.filterByAbv = this.filterByAbv.bind(this);
}

componentWillMount(){
//let name = this.refs.selectedName.value
let promise = axios.get('https://api.punkapi.com/v2/beers')
promise.then(response => {
    this.setState({
        name: res.data.name,
        tagline: res.data.tagline,
        birthday: res.data.first_brewed,
        description: res.data.description,
        imageUrl: res.data.image_url,
        AlcoholByVolume: res.data.abv,
        bitterUnit: res.data.ibu