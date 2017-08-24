import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';

import TextField from 'material-ui/TextField';
import { post } from '../fetch/post';

const styleSheet = createStyleSheet('AddComment', theme => ({
    button: {
        position: 'fixed',
        right: 15,
        bottom: 15,
    },
    dialog: {
        width: '96%',
        marginLeft: '2%'
    },
    textField: {
        width: '80vw'
    }
}));

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            dialogOpen: false,
            toastMessage: '',
            toastOpen: false,
            comment: '',
            commentSubmitButtonDisabled: true,
        }
    }

    /***
     * dialog cancel and confirm
     */
    handleDialogCancel = () => {
        this.setState({
            dialogOpen: false,
        });
    };

    handleDialogConfirm = () => {
        const addComment = this.props.addComment;
        addComment({
            username: localStorage.getItem('username'),
            headImageUrl: 'http://192.168.1.110:5000/headImageUrl.jpg',
            context: this.state.comment
        });
        // post to server
        post('comment/',
            {
                userId: localStorage.getItem('userId'),
                videoId: window.location.pathname.match("[0-9]{5}")[0],
                context: this.state.comment
            },
            localStorage.getItem('token')
        ).then(function () {
            this.setState({
                dialogOpen: false,
                toastMessage: '保存成功',
                toastOpen: true,
                comment: '',
            });
        }.bind(this))
    };

    /***
     * Toast close
     */
    handleToastClose = () => {
        this.setState({
            toastOpen: false,
        });
    };

    handleTextChange = (event) => {
        this.setState({
            comment: event.target.value,
        });
        if (event.target.value.length > 0) {
            this.setState({
                commentSubmitButtonDisabled: false,
            });
        } else {
            this.setState({
                commentSubmitButtonDisabled: true,
            });
        }
    };

    handleAddComment() {
        this.setState({ dialogOpen: true });
    }

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Button fab color="primary" className={classes.button} onClick={this.handleAddComment.bind(this)}>
                    <ModeEditIcon />
                </Button>

                <Dialog open={this.state.dialogOpen} className={classes.dialog}>
                    <DialogTitle>
                        输入评论
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            id="comment"
                            className={classes.textField}
                            value={this.state.comment}
                            onChange={this.handleTextChange.bind(this)}
                            autoFocus
                            multiline
                            rowsMax={3}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogCancel} color="accent">
                            取消
                        </Button>
                        <Button onClick={this.handleDialogConfirm} color="primary" disabled={this.state.commentSubmitButtonDisabled}>
                            提交
                        </Button>
                    </DialogActions>
                </Dialog>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.toastOpen}
                    autoHideDuration={3000}
                    onRequestClose={this.handleToastClose}
                    message={this.state.toastMessage}
                    action={[
                        <Button key="undo" color="accent" dense onClick={this.handleToastClose}>
                            好的
                        </Button>
                    ]}
                />
            </div>
        )
    }
}

export default withStyles(styleSheet)(AddComment);
