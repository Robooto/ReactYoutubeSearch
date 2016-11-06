// import js module coming from node_modules

import React from 'react';
import ReactDOM from 'react-dom';

// importing from our file need to give reference
import SearchBar from './components/search_bar';

const API_KEY = '';

// Create new component.  This component should produce some html
// when not using arguments can replace function with =>
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component's generated HTML and put it on the page (In the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));