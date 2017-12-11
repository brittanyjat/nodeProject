import React, { Component } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import Posting from './Posting';

class List extends Component {
    constructor() {
        super();

        this.state = {
            beersList: [],
            newId: 26
        }
       // this.getBeers = this.getBeers.bind(this)
    //    this.filterByAbv = this.filterByAbv.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleDelete = this.handleDelete.bind(this);
       this.handlePost = this.handlePost.bind(this);
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


    // filterByAbv(){
    //     let abvNum = this.refs.selectedAbv.value
    //     var newList = this.state.beersToDisplay.filter(e => {
    //        if (e.abv && abvNum == 5 && e.abv <= abvNum){
    //         return e;
    //        }else if (e.abv && abvNum == 10 && e.abv <= abvNum && e.abv > 5){
    //            return e;
    //     //    }else if (e.abv === ""){
    //     //        return beersToDisplay
    //        }
    //     })
    //     this.setState({
    //            beersToDisplay: newList
    //        })
    //     }
    
    
    handleSubmit(id, body){
        let promise = axios.put(`/api/beers/${id}`, body)
        promise.then(response => {
            this.setState({
                beersList: response.data
            })
        })
    }

    handleDelete(id){
        axios.delete(`/api/beers/${id}`).then(response => {
            this.setState({
                beersList: response.data
            }); console.log(response);
        }) 
    }


    handlePost(body){
        axios.post(`/api/beers/`, body).then(response => {
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
                              submit={this.handleSubmit}
                              handleDelete={this.handleDelete}/>
        })
        return(
            <div>
                <br></br>
                <ul className="beerlist"> 
                    {beersToDisplay}
                </ul>

                < Posting post={this.handlePost}/>
                {/* <select onChange={this.filterByAbv} ref="selectedAbv">
                    <option value="">Filter by ABV</option>
                    <option value="5">0-5</option>
                    <option value="10">6-10</option>
                </select> */}
            </div>

        )
    }

}

export default List;

