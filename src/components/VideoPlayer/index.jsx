import React from 'react';
import videojs from 'video.js';
import './video-js.css';

export default class VideoPlayer extends React.Component{
    componentDidMount() {
        // instantiate video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
            // console.log('播放器初始化完成!')
        });
    }

    // destroy player on unmount
    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
            console.log("结束播放");
        }
    }

    // wrap the player in a div with a `data-vjs-player` attribute
    // so videojs won't create additional wrapper in the DOM
    // see https://github.com/videojs/video.js/pull/3856
    render() {
        return (
            <div data-vjs-player className="my-player">
                <video
                    ref={ node => this.videoNode = node }
                    className="video-js"
                    width={document.getElementById('root').offsetWidth}
                    height={document.getElementById('root').offsetWidth/(16/9)}
                >
                </video>
            </div>
        )
    }
}