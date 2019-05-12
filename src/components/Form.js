import React, { Component } from "react";
import ShowData from "./ShowData"
import { Input, Button, Form } from 'reactstrap';
import moment from 'moment';


export default class FormInput extends Component {
    state = {
        data: []
    }
    i = 0;

    SubmitForm = () => {
        var name = document.getElementById("name").value
        var content = document.getElementById("content").value

        if (content === '' && name === '') {
            alert('Please Enter Your name and say something')
        } else {
            var object = {
                id: this.i++,
                name: name,
                content: content,
                date: moment().format('LLLL')
            }
            this.setState({ data: [object] })
            document.getElementById("form").reset();
        }
        console.log(this.state.data)

    }
    render() {
        return (
            <div className='container'>
                <Form id='form'>
                    <label>
                        Name: <Input type="text" id="name" placeholder="Enter Your Name" />
                    </label>
                    <label>
                        Content: <Input type="text" id="content" placeholder="Say Something" />
                    </label>
                    <Button onClick={this.SubmitForm} color='danger'>Submit</Button>    
                </Form>
                <br />
                <ShowData value={this.state.data} />
            </div>
        )
    }
}