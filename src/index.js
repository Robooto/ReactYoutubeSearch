// import js module coming from node_modules

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';


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
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('day9');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
};

// Take this component's generated HTML and put it on the page (In the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));