import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styleSheet = createStyleSheet('Toast', theme => ({

}));

class Toast extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            open: this.props.open,
        };
    }

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={5000}
                    onRequestClose={this.handleRequestClose}
                    message={this.props.message}
                    action={[
                        <Button key="undo" color="accent" dense onClick={this.handleRequestClose}>
                            好的
                        </Button>
                    ]}
                />
            </div>
        );
    }
}

Toast.propTypes = {
    message: PropTypes.string.isRequired,
};

export default withStyles(styleSheet)(Toast);