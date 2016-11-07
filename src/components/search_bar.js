// import react libraries
import React, { Component } from 'react';

//define new class that extends react component
class SearchBar extends Component {
    // defining state in the constructor
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }

    render() {
        // react defined property
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={this.onInputChange.bind(this)} />
            </div>
        );
    }

    onInputChange(event) {
        // special funtion to set state
        this.setState({term: event.target.value});
    }
}

// export so other files can import
export default SearchBar;