import React, { Component } from 'react';

class StudentAccount extends Component{
    render(){
        return(
            <h1>{this.props.firstName}, {this.props.grade}</h1>
        )
    }
}

export default StudentAccount;