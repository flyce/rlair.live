import React, { Component } from 'react';

import TitleBar from '../../components/TitleBar';
import VideoPlayer from './subpage/Player';
import VideoTab from './subpage/VideoTab';

import PostImage from '../../source/images/image.jpg';

import Loading from '../../components/Loading';

import { get } from '../../fetch/get';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: [],
            loading: true,
        };
    }


    componentDidMount() {

        get('video/' + window.location.pathname.match('[0-9]{5}')[0]).then(json => {
            this.setState({
                video: json[0],
                loading: false
            });
        });


        // 开发时使用
        // this.setState({
        //     video: {title: '锤子', imageUrl: PostImage, src: VideoSrc, videoId: 10001, introduction: '坚果 Pro，是锤子科技在2017年5月9日晚在深圳正式发布的旗下的第五款新机。全玻璃面板与金属中框，采用了双摄像头，拥有6.98mm的厚度，158g的重量，拥有红色和黑色两种常规配色，同时，加入了细红线版本。' }
        // });
    }

    render() {
        let { video } = this.state;
        window.document.title = (this.state.video.title || "加载中") + " - rliair.live";
        return (
            <div>
                {this.state.loading ? <Loading/> :
                    <div>
                        <TitleBar title={video.title} />
                        <VideoPlayer poster={video.imageUrl || PostImage} src={video.src}/>
                        <VideoTab video={video}/>
                    </div>
                }
            </div>
        );
    }
}

export default Player;
