import React, { Component } from 'react';
import axios from 'axios';

class BeerCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            editting: false,
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(){
        this.setState({
            editting: !this.state.editting
        })
    }

    handleSubmit(){
        let body = {
            name: this.refs.name.value,
            tagline: this.refs.tagline.value,
            description: this.refs.description.value,
            abv: this.refs.abv.value,
            ibu: this.refs.ibu.value,
            id: this.props.id
        }
        this.props.submit(this.props.id, body);
        this.handleEdit();
    }

 


    render(){
        return(
            <article className="card">
                { this.state.editting === true
                  ? <input placeholder="name" ref="name"/>
                  : <h1>{this.props.name}</h1>}
                  <br></br>
                { this.state.editting === true
                  ? <input placeholder="tagline" ref="tagline"/>
                  : <p><strong>Tagline: {this.props.tagline}</strong></p>}
                { this.state.editting === true
                  ? <input placeholder="description" ref="description" />
                  : <p>Description: {this.props.description}</p>}
                { this.state.editting === true
                  ? <input placeholder="alcholByVolume" ref="abv"/>
                  : <p>ABV: {this.props.alcoholByVolume}</p>}
                { this.state.editting === true
                  ? <input placeholder="bitterUnit" ref="ibu"/>
                  :  <p>IBU: {this.props.bitterUnit}</p>}
                { this.state.editting === true
                  ? <button onClick={() => this.handleSubmit()}>Submit</button>
                  : null }
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
                <br></br>

                <br></br>
            </article>
        )
    }

}


export default BeerCard;
