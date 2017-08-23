import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import VideoPlayer from '../../../components/VideoPlayer';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <VideoPlayer {...{
                autoPlay: true,
                controls: true,
                poster: this.props.poster,
                sources: [{
                    src: this.props.src,
                    type: 'video/mp4'
                }]
            }} />
        )
    }
}

export default Player;
