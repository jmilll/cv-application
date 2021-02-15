import React, { Component } from "react";

/* functional componenet
const MyComponent = (props) => {
  return <div>{props.title}</div>;
};
*/

class MyComponent extends Component {
    constructor(props) {
        super(props);
    }

    //destructured version
    render() {
        const { title, onButtonClicked } = this.props;

        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={onButtonClicked}>Click Me!</button>
            </div>
        );
    }

    /*
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.props.onButtonClicked}>Click You!</button>
            </div>
        );
    }
    */
}

export default MyComponent;