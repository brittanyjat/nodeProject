import React, { Component } from 'react';
import axios from 'axios';

class Posting extends Component{
    constructor(props){
        super(props)
        this.state = {
            posting: false
        };
        this.postSubmit = this.postSubmit.bind(this);
    }

    postSubmit(){
        this.setState({
            posting: !this.state.posting
        })
    }


    handlePost(){
        let body = {
            name: this.refs.name.value,
            tagline: this.refs.tagline.value,
            description: this.refs.description.value,
            abv: this.refs.abv.value,
            ibu: this.refs.ibu.value,
        }
        this.props.post(body);
        this.postSubmit();
    }


    render(){
        return (
            <div>
                <button onClick={() => this.postSubmit()}>Add New Beer</button>
                    { this.state.posting === true
                      && <input placeholder="name" ref="name"/> 
                      }
                    { this.state.posting === true
                      &&<input placeholder="tagline" ref="tagline" /> 
                      }
                    { this.state.posting === true 
                      &&<input placeholder="description" ref="description" /> 
                      }
                    { this.state.posting === true
                      &&<input placeholder="alcoholByVolume" ref="abv" />
                      }
                    { this.state.posting === true
                      &&<input placeholder="bitterUnit" ref="ibu" /> 
                      }
            
                <button onClick={() => this.handlePost()}>Submit New Beer</button>
            </div>
        )
    }


}

export default Posting;