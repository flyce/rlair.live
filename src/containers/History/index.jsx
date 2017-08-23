import React from 'react';

import TitleBar from '../../components/TitleBar';
import VideoList from '../../components/VideoList';

class History extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title="观看历史" back="/member" />
                <VideoList path="api/history" />
            </div>
        );
    }
}

export default History;
