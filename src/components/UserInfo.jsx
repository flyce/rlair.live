import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { getItem, removeItem } from '../utils/localStore';
import history from '../router/history';

const styleSheet = createStyleSheet('UploadVideo', theme => ({
    card: { maxWidth: 400, width: '96%', margin: '0 auto', marginTop: 10},
    avatar: { backgroundColor: '#F55852' },
}));

class UserInfo extends Component {
    constructor(props) {
        super(props);
        if (getItem("username") == null) {
            history.push('/login');
        }
    }

    handleLoginOut(event) {
        event.preventDefault();
        removeItem("token");
        removeItem("username");
        removeItem("userId");
        history.push('/');
    }

    render() {
        const classes = this.props.classes;

        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        页面开发中...<br />
                        <br />
                        <br />
                        <Button
                            onClick={this.handleLoginOut.bind(this)}
                            style={{color: "#fff", backgroundColor: "#9c27b0", width: "100%"}}
                        >
                            注销
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

UserInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(UserInfo);