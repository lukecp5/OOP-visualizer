/* eslint-disable no-useless-constructor */
// ClassComponent.js
import React from 'react';

class ClassComponent extends React.Component {
    constructor(props, name = "", type = "", properties = []) {
        super(props);

        // Add your constructor logic here
        this.name = name;
        this.type = type;
        this.properties = properties;
    }
    
    render() {
        return(<div className="class">
            {
        /*  */}
            <h2>Class</h2>
            <p>Properties:</p>
            <ul>
                <li>Property 1</li>
                <li>Property 2</li>
            </ul>
            <p>Methods:</p>
            <ul>
                <li>Method 1()</li>
                <li>Method 2()</li>
            </ul>
        </div>
    )};
};

export default ClassComponent;