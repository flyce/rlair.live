import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import history from '../router/history';

import { get } from '../fetch/get';

const styleSheet = createStyleSheet('VideoList', {
    card: {
        maxWidth: 400,
        width: '97%',
        margin: '0 auto',
        marginTop: 5,
    },
    title: {
        color: '#555',
    }
});


class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            videos: []
        }
    }

    componentDidMount() {
        get(this.props.path).then(json => {
            this.setState({
                videos: json
            });
        });

        /***
         * 开发时使用，模拟 fetch 获取数据
         */
        // this.setState({
        //     videos: [{videoId: 10001, imageUrl: image1, title: 'Smartisan T1'},{videoId: 10002, imageUrl: image2, title: 'T1发布会'}]
        // });
    }

    handleVideoClick(videoId, event) {
        event.preventDefault();
        history.push('/video/' + videoId);
    }

    render () {
        const classes = this.props.classes;
        var videos = this.state.videos;
        videos = videos.map(function (video, index) {
            return(
                <Paper
                    key={index}
                    className={classes.card}
                    style={{marginTop: 10}}
                    onClick={this.handleVideoClick.bind(this, video.videoId || video._id)}
                >
                    <img src={video.imageUrl} alt={video.title} width="100%" style={{maxWidth: 400,}} />
                    <div
                        style={{
                            marginRight: 10,
                            marginLeft: 10,
                            paddingBottom: 3,
                        }}
                    >
                        <Typography type="headline" component="h2" className={classes.title}>
                            {video.title}
                        </Typography>
                    </div>
                </Paper>
            );
        }.bind(this));
        return (
            <div>
                {videos}
            </div>
        );
    }
}

VideoList.propTypes = {
    classes: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired
};

export default withStyles(styleSheet)(VideoList);
