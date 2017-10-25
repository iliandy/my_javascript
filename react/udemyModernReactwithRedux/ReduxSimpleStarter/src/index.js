import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyD-sJMng531xBH4TcTuK-pud4OxSg74GrU";


// create component to generate HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "Pixel 2 XL"}, (videos) => {
      this.setState({ videos });
    // this.setState({ videos: videos }), if key == value
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.videos[0] } />
        <VideoList videos={ this.state.videos } />
      </div>
    );
  }

}

// place component generated HTML and put it into page/DOM
ReactDOM.render(<App/>, document.querySelector(".container"));
