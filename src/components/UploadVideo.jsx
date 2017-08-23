import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

import ImageImg from '../source/images/image.jpg';

const styleSheet = createStyleSheet('UploadVideo', theme => ({
    card: { maxWidth: 400, width: '96%', margin: '0 auto', marginTop: 10},
    avatar: { backgroundColor: '#F55852' },
}));

class UploadVideo extends Component {

    render() {
        const classes = this.props.classes;

        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia>
                        <img src={ImageImg} alt="Contemplative Reptile" width="100%"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            软件处于Alpha阶段，暂不支持用户上传视频，请将视频发送至管理员邮箱。<br />
                            The software is in alpha phase and does not support user upload video, please send video to admin mailbox.
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={<Avatar aria-label="Recipe" className={classes.avatar}>I</Avatar>}
                        title="Idea"
                        subheader="idea@flyce.cn"
                    />
                </Card>
            </div>
        );
    }
}

UploadVideo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(UploadVideo);