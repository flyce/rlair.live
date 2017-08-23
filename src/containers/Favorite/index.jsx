import React from 'react';

import TitleBar from '../../components/TitleBar';
import VideoList from '../../components/VideoList';

class WatchLater extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title="我的收藏" back="/member" />
                <VideoList path={"type/favorite/" + localStorage.getItem("userId")} />
            </div>
        );
    }
}

export default WatchLater;
