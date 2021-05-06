import React, { Component } from 'react';


class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <div>
                    <h1>{this.props.lastName}, {this.props.firstName} </h1>
                    <p>Age: {this.props.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                </div>

            </div>
        );
    }
}
    
export default PersonCard;

// within the component retrun, we have to use {} to pass props.