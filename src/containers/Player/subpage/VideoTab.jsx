import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import Comment from './Comments';

const TabContainer = props =>
    <div style={{ padding: 0 }}>
        {props.children}
    </div>;

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styleSheet = createStyleSheet('VideoTab', theme => ({
    root: {
        backgroundColor: "background-color: #f4f4f4",
    },
}));

class VideoTab extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            index: 0,
        });
    }

    handleChange = (event, index) => {
        this.setState({ index });
    };

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