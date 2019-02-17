import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import {VideoList, VideoListItem} from './components/VideoList';
import API from './utils/API';

class App extends Component {
  /* Storing information retrieved from API */
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.searchYouTube("kittens");
  }

  searchYouTube = term => {
    API.searchVideos(term)
      .then(res => this.setState({videos: res.data.items, selectedVideo: res.data.items[0]}))
      .catch(err => console.log(err));
  }

  chooseVideo = video => {
    this.setState({ selectedVideo: video});
  }

  throttledSearch = _.debounce(this.searchYouTube, 900);

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar searchYouTube={this.throttledSearch}/>
          </Col>
        </Row>
        <Row>
            <Col md="9">
              <VideoDetail video={this.state.selectedVideo}/>
            </Col> 
            <Col md="3">
              <VideoList>
                {this.state.videos.map(video => (
                  <VideoListItem 
                    video={video} 
                    key={video.id.videoId || video.id.playlistId}
                    selectedVideo={this.state.selectedVideo}
                    chooseVideo={this.chooseVideo}
                  />
                ))}
              </VideoList>
            </Col>
        </Row>
      </Container>
      
    );
  }
}

export default App;
