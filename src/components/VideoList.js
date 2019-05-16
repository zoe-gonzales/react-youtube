import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    padding: 0;
    list-style-type: none;
`

// Item has one of following: active=true or active=false
const Item = styled.li`
    img {
        border: ${props => props.active ? "4px solid #FFAAD6" : "none"};
        width: 200px;
        margin-bottom: 15px;
        cursor: pointer;
        border-radius: 5px;

        :hover {
            border: 4px solid #3BB29F;
        }
    }
`

export const VideoList = props => {
    return (
        <List>
            {props.children}
        </List>
    )
}

export const VideoListItem = ({ video, selectedVideo, chooseVideo }) => {
    return (
        <Item active={video === selectedVideo} onClick={() => chooseVideo(video)}>
            <img src={video.snippet.thumbnails.medium.url} />
        </Item>
    )
}