import React, { Component } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';

class List extends Component {
    constructor() {
        super();

        this.state = {
            beersList: []
        }
       // this.getBeers = this.getBeers.bind(this)
       this.filterByAbv = this.filterByAbv.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        //let name = this.refs.selectedName.value
        let promise = axios.get('/api/beers')
        promise.then(response => {
            console.log(response)
            this.setState({
                beersList: response.data
            })
        })
    }


    filterByAbv(){
        let abvNum = this.refs.selectedAbv.value
        var newList = this.state.beersToDisplay.filter(e => {
           if (e.abv && abvNum == 5 && e.abv <= abvNum){
            return e;
           }else if (e.abv && abvNum == 10 && e.abv <= abvNum && e.abv > 5){
               return e;
        //    }else if (e.abv === ""){
        //        return beersToDisplay
           }
        })
        this.setState({
               beersToDisplay: newList
           })
        }
    
    // filterByIbu(){
    //     let ibuNum = this.refs.selectedIbu.value
    //     var newList2 = this.state.beersToDisplay.filter(e => {
    //         if (e.ibu && ibuNum == )
    //     })
    // }
    
    handleSubmit(id, body){
        let promise = axios.put(`/api/beers/${id}`, body)
        promise.then(response => {
            this.setState({
                beersList: response.data
            })
        })
    }


    
    render(){
        const beersToDisplay = this.state.beersList.map((beer, index) => {
            return < BeerCard key={index}
                              name={beer.name}
                              tagline={beer.tagline}
                              description={beer.description}
                              alcoholByVolume={beer.abv}
                              bitterUnit={beer.ibu}
                              id={beer.id}
                              submit={this.handleSubmit}/>
        })
        return(
            <div>
                 <h2 className="lets">let's drink</h2>
                <h1 className="beer1">BEER</h1>
                {/* <h2 className="kind">.....but what kind?</h2> */}
                <br></br>
                <ul className="beerlist"> 
                    {beersToDisplay}
                </ul>
                <select onChange={this.filterByAbv} ref="selectedAbv">
                    <option value="">Filter by ABV</option>
                    <option value="5">0-5</option>
                    <option value="10">6-10</option>
                </select>
            </div>

        )
    }

}

export default List;

