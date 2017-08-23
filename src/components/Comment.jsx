import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let comment = this.props;
        return (
            <div>
                <Paper
                    elevation={4}
                    style={{
                        padding: 16,
                        marginTop: 5,
                    }}
                >
                    <div style={{display: 'flex', marginBottom: 2}}>
                        <Avatar alt={comment.username} src={comment.headImageUrl} />
                        <Typography type="headline" component="h6" style={{marginLeft: 10, justifyContent: 'center', }}>
                            {comment.username}
                        </Typography>
                    </div>
                    <Typography type="body1" component="p">
                        {comment.context}
                    </Typography>
                </Paper>
            </div>
        )
    }
}

export default Comment;
