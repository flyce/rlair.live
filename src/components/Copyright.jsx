import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

import ImageImg from '../source/images/image.jpg';

const styleSheet = createStyleSheet('Copyright', theme => ({
    card: { maxWidth: 400, width: '96%', margin: '0 auto', marginTop: 10},
    avatar: { backgroundColor: '#F55852'},
    flexGrow: { flex: '1 1 auto' },
}));

class Copyright extends Component {
    render() {
        const classes = this.props.classes;

        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia className={classes.copy}>
                        <img src={ImageImg} alt="Contemplative Reptile" width="100%"/>
                    </CardMedia>
                    <CardContent>
                        <Typography component="p">
                            网站中的视频均来源于互联网，如有侵权，请告知管理员。我们会立即删除。<br />
                            The videos on the site are from the Internet. If we violate your copyrights, please inform the administrator. We will delete it immediately.
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={<Avatar aria-label="Echo" className={classes.avatar}>E</Avatar>}
                        title="Copyright"
                        subheader="copyright@flyce.cn"
                    />
                    <CardContent>
                        <Typography component="p">
                            项目使用了下列开源库：<br />
                            <a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">React@15.6.1</a><br />
                            <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">react-router@4.1.2</a><br />
                            <a href="http://videojs.com/" target="_blank" rel="noopener noreferrer">video.js@6.2.0</a><br />
                            <a href="https://material-ui-1dab0.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Material-UI@1.0.0-alpha.22</a>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Copyright.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Copyright);