import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import PeoPleIcon from 'material-ui-icons/PeopleOutline';

import { post } from '../fetch/post';
import { getItem } from '../utils/localStore';

import history from '../router/history';
import TitleBar from "./TitleBar";

const styleSheet = createStyleSheet('Login', {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '88vh',
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
class Regeist extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: '',
            passwordRepeat: '',
            error: false,
            helperText: '',
            submitButtonDisabled: true
        }
    }

    componentDidMount() {
        if (getItem("token")) {
            history.push('/');
        }
    }

    handleTextChange(event) {
        if (event.target.name === "username") {
            this.setState({
                username: event.target.value
            });
        } else {
            if (event.target.name === 'password') {
                this.setState({
                    password: event.target.value
                });
                if  ((this.state.passwordRepeat.length > 0) && (this.state.passwordRepeat !== event.target.value)) {
                    this.setState({
                        error: true,
                        helperText: '两次输入密码不一致！'
                    });
                } else {
                    this.setState({
                        error: false,
                        helperText: ''
                    });
                }
            } else {
                this.setState({
                    passwordRepeat: event.target.value
                });
                if  ((this.state.password.length > 0) && (this.state.passwordRepeat !== event.target.value)) {
                    if (this.state.password !== event.target.value) {
                        this.setState({
                            error: true,
                            helperText: '两次输入密码不一致！'
                        });
                    } else {
                        this.setState({
                            error: false,
                            helperText: ''
                        });
                    }
                }
            }
        }

        if (event.target.name === 'username') {
            if ((event.target.value.length > 0) &&
                (this.state.password.length > 0) &&
                (this.state.passwordRepeat.length > 0) &&
                (this.state.password === this.state.passwordRepeat)) {
                this.setState({
                   submitButtonDisabled: false
                });
            } else {
                this.setState({
                    submitButtonDisabled: true
                });
            }
        }

        if (event.target.name === 'password') {
            if ((event.target.value.length > 0) &&
                (this.state.username.length > 0) &&
                (this.state.passwordRepeat.length > 0) &&
                (event.target.value === this.state.passwordRepeat)) {
                this.setState({
                    submitButtonDisabled: false
                });
            } else {
                this.setState({
                    submitButtonDisabled: true
                });
            }
        }

        if (event.target.name === 'passwordRepeat') {
            if ((event.target.value.length > 0) &&
                (this.state.password.length > 0) &&
                (this.state.username.length > 0) &&
                (this.state.password === event.target.value)) {
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
        if (this.state.password !== this.state.passwordRepeat) {
            alert('两次密码不一致！');
        } else {

        }

        // 登陆验证逻辑
        post('user/register',
            {
                "username": this.state.username,
                "password": this.state.password
            }
        ).then(
            function (data) {
                if (data._id !== null) {
                    alert('注册成功，即将跳转到登陆页！');
                    history.push('/login');
                } else {
                    alert('注册失败，请重试！');
                }
            }
        );
    }

    render() {
        const classes = this.props.classes;

        return (
            <div>
                <TitleBar title="注册"/>
                <div className={classes.main}>
                    <Card className={classes.card} >
                        <div className={classes.login}>rlair.live register</div>
                        <div className={classes.avatar}>
                            <Avatar color="primary" size={60} ><PeoPleIcon /></Avatar>
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
                                    error={this.state.error}
                                />
                            </div>
                            <div className={classes.input}>
                                <TextField
                                    name="passwordRepeat"
                                    label="再次输入密码"
                                    type="password"
                                    className={classes.input}
                                    onChange={this.handleTextChange.bind(this)}
                                    helperText={this.state.helperText}
                                    error={this.state.error}
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
                                注册
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

Regeist.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Regeist);