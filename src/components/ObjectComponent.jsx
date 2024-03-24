import React from 'react';

class ObjectComponent extends React.Component {
    constructor(props) {
        super(props);
        // Add your constructor logic here
        this.name = "John Doe";
        this.type = "Person";
    }

    render() {
        // Add your render logic here
        return (
            <div>
                {
                    <h1>{this.name}</h1>
                }
            </div>
        );
    }
}

export default ObjectComponent;