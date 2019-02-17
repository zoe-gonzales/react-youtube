import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    margin: 10px 0;
`


const VideoDetail = ({ video }) => {
    if (!video) {
        return <p>Loading spinning goes here</p>
    }
    console.log(video);
    const videoId = video.id.videoId;
    const videoURL = `https://www.youtube.com/embed/${videoId}?rel=0`;
    
    return (
        <>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoURL} allowFullScreen></iframe>
            </div>
            <StyledH2>{video.snippet.title}</StyledH2>
            <p>{video.snippet.description}</p>
        </>
    )
}

export default VideoDetail;