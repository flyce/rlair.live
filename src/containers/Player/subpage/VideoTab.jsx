import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ScheduleIcon from 'material-ui-icons/Schedule';

import Comment from './Comments';
import { post } from '../../../fetch/post';
import { get } from '../../../fetch/get';

const TabContainer = props =>
    <div style={{ padding: 0 }}>
        {props.children}
    </div>;

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styleSheet = createStyleSheet('VideoTab', theme => ({
    root: {
        backgroundColor: "#f4f4f4",
    },
    iconButton: {
        color: "#9c27b0",

    }
}));

class VideoTab extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            index: 0,
            favorite: false,
        });
    }

    componentDidMount() {
        get('type/check/favorite/' + window.location.pathname.match("[0-9]{5}")[0]).then(function (data) {
            this.setState({
                favorite: data,
            });
        }.bind(this));
    }

    handleChange = (event, index) => {
        this.setState({ index });
    };

    handleIconButtonClick(type, event) {
        event.preventDefault();
        post(
            "type/",
            {
                "userId": localStorage.getItem('userId'),
                "videoId": window.location.pathname.match("[0-9]{5}")[0],
                "type": type
            },
            localStorage.getItem('token')
        ).then(function (data) {
            // data validation
            // console.log(data);
        });
        this.setState({
            favorite: !this.state.favorite,
        })
    }

    render() {
        const classes = this.props.classes;
        let defaultIntroduction ='介绍找不到了...';
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        index={this.state.index}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        <Tab label="简介" />
                        <Tab label="评论" />
                    </Tabs>
                </AppBar>
                {this.state.index === 0 && <TabContainer>
                    <div style={{padding: 16}}>
                        <div>
                            <IconButton
                                className={classes.iconButton}
                                onClick={this.handleIconButtonClick.bind(this, "favorite")}
                                name="favorite"
                            >
                                {this.state.favorite === true ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
                            </IconButton>
                            <IconButton
                                className={classes.iconButton}
                                onClick={this.handleIconButtonClick.bind(this, "later")}
                                name="later"
                            >
                                <ScheduleIcon />
                            </IconButton>
                        </div>
                        <Typography type="body1" component="p">
                            {this.props.video.introduction || defaultIntroduction}
                        </Typography>
                    </div>
                </TabContainer>}
                {this.state.index === 1 && <TabContainer>
                    <Comment />
                </TabContainer>}
            </div>
        );
    }
}

VideoTab.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(VideoTab);