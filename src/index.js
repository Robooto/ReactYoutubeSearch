// import js module coming from node_modules

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


// importing from our file need to give reference
import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail';

const API_KEY = '';

// Create new component.  This component should produce some html
// when not using arguments can replace function with =>
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
};

// Take this component's generated HTML and put it on the page (In the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));