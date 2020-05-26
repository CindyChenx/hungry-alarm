import React, { Component } from 'react';


export default class EventCreate extends Component {

    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bine(this)

        this.state = {
            rid: '',
            event_title: '',
            start_time:'',
            end_time:'',
            description:'',
            event_picture:''
        }

    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        
    }


    render() {
        return (
            <div >hi</div>
        )
    }
}
