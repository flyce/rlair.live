import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { CircularProgress } from 'material-ui/Progress';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('CircularIndeterminate', theme => ({
    root:{
        height: '97vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}));

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <CircularProgress size={50}/>
            </div>
        )
    }
}

Loading.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Loading);
