class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentVideos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
    };
  }

  componentDidMount() {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: 'react',
      max: 5,
    }, this.setInitialState.bind(this));
  }

  setInitialState(videos) {
    this.setState({
      currentVideos: videos,
      currentVideo: videos[0]
    });
  }

  onVideoEntryClick(video) {
    this.setState({
      //currentVideos: this.state.currentVideos,
      currentVideo: video
    });
  }

  onSearchButtonClick(e) {
    var obj = {
      key: window.YOUTUBE_API_KEY,
      query: e.target.value,
      max: 5,
    };
    this.props.searchYouTube(obj, this.getVideosFromYouTube.bind(this));
  }
  getVideosFromYouTube(videos) {
    this.setState({
      currentVideos: videos,
      currentVideo: videos[0]
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search cb={this.onSearchButtonClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.currentVideos} cb={this.onVideoEntryClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
