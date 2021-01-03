import React, { Component } from 'react';

class Course extends Component {
    interpretQueryString = (key) => {
        if(this.props.location.search.length > 0){
            const params = new URLSearchParams(this.props.location.search);
            return params.get(key);
        }
    }

    render () {
        return (
            <div>
                <h1>{this.interpretQueryString('title')}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;