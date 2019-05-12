import React, { Component } from "react";
import {
    Card, CardBody,
    CardTitle, CardSubtitle, CardText
} from 'reactstrap';
import { CSVLink } from "react-csv";



export default class ShowData extends Component {
    state = {
        data: []
    }
    componentWillReceiveProps(props) {
        this.setState({
            data: this.state.data.concat(props.value)
        })
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                {
                    this.state.data.length > 0 &&
                    this.state.data.reverse()
                        .map((data, i) => {
                            return <Card key={i}>
                                <CardBody>
                                    <CardTitle><h1>{data.name}</h1></CardTitle>
                                    <CardSubtitle>{data.content}</CardSubtitle>
                                    <CardText>{data.date}</CardText>
                                </CardBody>
                            </Card>
                        })
                }
                <CSVLink data={this.state.data} >Download me</CSVLink>
            </div>
        )
    }
}