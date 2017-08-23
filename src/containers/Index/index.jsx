import React, { Component } from 'react';

import VideoList from './subpage/VideoList';
import BottomNavBar from  '../../components/BottomNavBar';

class IndexPage extends Component {
    componentDidMount() {
        window.document.title = "rlair.live - 每天一条短视频";
    }
    render() {
        return (
            <div style={{marginBottom: '64px',}}>
                <VideoList />
                <BottomNavBar />
            </div>
        );
    }
}

export default IndexPage;
