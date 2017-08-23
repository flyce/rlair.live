import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import LockIcon from 'material-ui-icons/LockOutline';

import { post } from '../fetch/post';
import { setItem, getItem } from '../utils/localStore';

import history from '../router/history';

const styleSheet = createStyleSheet('Login', {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '97vh',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '500px',
        // marginTop: '100px'
    },
    login: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '20px',
        color: '#9c27b0'
    },
    card: {
        minWidth: 300,
    },
    avatar: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        display: 'flex',
        width: '100%',
    },
    button: {
        margin: '0 auto',
        width: '93%',
    }
});
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            submitButtonDisabled: true
        }
    }

    componentDidMount() {
        if (getItem("token")) {
            history.push('/');
        }
    }

    handleTextChange(event) {
        if (event.target.name === 'username') {
            this.setState({
                username: event.target.value
            });

            // submit button disabled control
            if (this.state.password.length > 0 && event.target.value.length > 0) {
                this.setState({
                    submitButtonDisabled: false
                });
            } else {
                this.setState({
                    submitButtonDisabled: true
                });
            }
        } else {
            this.setState({
                password: event.target.value
            });

            // submit button disabled control
            if (this.state.username.length > 0 && event.target.value.length > 0) {
                this.setState({
                    submitButtonDisabled: false
                });
            } else {
                this.setState({
                    submitButtonDisabled: true
                });
            }
        }
    }

    handleLogin() {
        // 登陆验证逻辑
        post('user/login',
            {
                "username": this.state.username,
                "password": this.state.password
            }
        ).then(
            function (data) {
                console.log(data);
                if (data.token && this.state.username && data.userId) {
                   setItem("token", data.token);
                   setItem("username", this.state.username);
                   setItem("userId", data.userId);
                   const token = getItem("token");
                   if (token.length > 0) {
                       history.push('/');
                   }
                }
            }.bind(this)
        );
        // 重定向
        //
    }

    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.main}>
                <Card className={classes.card} >
                    <div className={classes.login}>rlair.live Login</div>
                    <div className={classes.avatar}>
                        <Avatar color="primary" size={60} ><LockIcon /></Avatar>
                    </div>

                    <div className={classes.form}>
                        <div>
                            <TextField
                                name="username"
                                label="用户名"
                                className={classes.input}
                                onChange={this.handleTextChange.bind(this)}
                                autoFocus
                                // helperText={this.state.usernameWarning}
                            />
                        </div>
                        <div className={classes.input}>
                            <TextField
                                name="password"
                                label="密码"
                                type="password"
                                className={classes.input}
                                onChange={this.handleTextChange.bind(this)}
                                // helperText="password"
                            />
                        </div>
                    </div>
                    <CardActions>
                        <Button
                            raised
                            color="primary"
                            className={classes.button}
                            onClick={this.handleLogin.bind(this)}
                            disabled={this.state.submitButtonDisabled}
                        >
                            登陆
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Login);