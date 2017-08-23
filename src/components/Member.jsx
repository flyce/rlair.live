import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import List, {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import { CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import history from '../router/history.js';

import FavoriteIcon from 'material-ui-icons/FavoriteBorder';
import ScheduleIcon from 'material-ui-icons/Schedule';
import UploadIcon from 'material-ui-icons/FileUpload';
import InfoIcon from 'material-ui-icons/InfoOutline';
import HistoryIcon from 'material-ui-icons/Restore';
import AboutIcon from 'material-ui-icons/Mood';


import HeadImg from '../source/images/image2.jpg';

const styleSheet = createStyleSheet('Member', theme => ({
    root: {
        width: '100%',
        maxWidth: 400,
        margin: '0 auto',
        background: theme.palette.background.paper,
    },
    info: {
        display: 'flex',
        height: 100,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cover: {
        marginRight: 0,
    },
    avatar: {
        width: 90,
        height: 90,
        marginLeft: 11,
        marginTop: 5,
    }
}));

class Member extends Component {
    handleRedirect(uri) {
        history.push('/' + uri);
    }
    
    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <List className={classes.info} onClick={this.handleRedirect.bind(this, 'login')}>
                    <div className={classes.cover}>
                        <Avatar src={HeadImg} className={classes.avatar}/>
                    </div>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography type="headline">{localStorage.getItem("username") || "点击登陆"}</Typography>
                            <Typography type="subheading" color="secondary">
                                这个人很懒，什么也没有写。
                            </Typography>
                        </CardContent>
                    </div>
                </List>
                <Divider />
                <List subheader={<ListSubheader>会员信息</ListSubheader>}>
                    <ListItem button onClick={this.handleRedirect.bind(this, 'favorite')}>
                        <ListItemIcon>
                            <FavoriteIcon />
                        </ListItemIcon>
                        <ListItemText primary="我的收藏" />
                    </ListItem>
                    <ListItem button onClick={this.handleRedirect.bind(this, 'later')}>
                        <ListItemIcon>
                            <ScheduleIcon />
                        </ListItemIcon>
                        <ListItemText primary="稍后再看" />
                    </ListItem>
                    {/*<ListItem button onClick={this.handleRedirect.bind(this, 'history')}>*/}
                        {/*<ListItemIcon>*/}
                            {/*<HistoryIcon />*/}
                        {/*</ListItemIcon>*/}
                        {/*<ListItemText primary="观看历史" />*/}
                    {/*</ListItem>*/}
                </List>
                <Divider />
                <List subheader={<ListSubheader>版权信息</ListSubheader>}>
                    <ListItem button onClick={this.handleRedirect.bind(this, 'upload')}>
                        <ListItemIcon>
                            <UploadIcon />
                        </ListItemIcon>
                        <ListItemText primary="上传视频" />
                    </ListItem>
                    <ListItem button onClick={this.handleRedirect.bind(this, 'copyright')}>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="版权信息" />
                    </ListItem>
                </List>
                <Divider />
                <List subheader={<ListSubheader>软件相关</ListSubheader>}>
                    <ListItem button onClick={this.handleRedirect.bind(this, 'about')}>
                        <ListItemIcon>
                            <AboutIcon />
                        </ListItemIcon>
                        <ListItemText primary="关于" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

Member.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Member);
