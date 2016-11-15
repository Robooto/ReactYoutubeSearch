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
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        // special funtion to set state
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

// export so other files can import
export default SearchBar;