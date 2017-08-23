import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';

import history from '../router/history';

class TitleBar extends Component {

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    handleBack(event) {
        event.preventDefault();
        this.props.back == null ? history.goBack() : history.push(this.props.back);
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Back" onClick={this.handleBack.bind(this)}>
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" >{this.props.title}</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default TitleBar;
