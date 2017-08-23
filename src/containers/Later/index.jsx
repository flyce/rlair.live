import React from 'react';

import TitleBar from '../../components/TitleBar';
import VideoList from '../../components/VideoList';

class WatchLater extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title="稍后观看" back="/member" />
                <VideoList path={"type/later/" + localStorage.getItem("userId")} />
            </div>
        );
    }
}

export default WatchLater;
