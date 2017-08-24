import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Comment from '../../../components/Comment';

import AddComment from '../../../components/AddComment';

import { get } from '../../../fetch/get';


export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isLoading: true,
            comments: []
        }
    }

    componentDidMount() {

        let id = window.location.pathname.match('[0-9]{5}')[0];
        get('comment/' + id).then(json => {
            this.setState({
                isLoading: false,
                comments: json
            });
        });
        
        // this.setState({
        //     comments: [{
        //         username: '雷军',
        //         headImageUrl: 'http://d.hiphotos.baidu.com/baike/whfpf%3D72%2C72%2C0/sign=6d060a52bc014a90816b15fdcf4a0e20/024f78f0f736afc30a208a85b619ebc4b7451225.jpg',
        //         context: '罗永浩，男，1972年出生于吉林省延边朝鲜族自治州和龙县（今和龙市）。锤子科技创始人。曾先后创办过牛博网、老罗英语培训学校，并著有《我的奋斗》一书。'
        //     }, {
        //         username: '刘作虎',
        //         headImageUrl: 'http://d.hiphotos.baidu.com/baike/whfpf%3D72%2C72%2C0/sign=6d060a52bc014a90816b15fdcf4a0e20/024f78f0f736afc30a208a85b619ebc4b7451225.jpg',
        //         context: '2015年8月25日晚19:30，罗永浩在上海举办2015夏季手机新品发布会，发布了一款面向年轻人售价899元起的坚果手机。'
        //
        //     }
        //     ]
        // });
    }

    addComment(data) {
        this.setState({
            comments: this.state.comments.concat(data)
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                {
                    this.state.isLoading ? <div>加载中...</div> :
                        this.state.comments.length === 0? <div style={{margin: 10}}>还没有评论哟, 快来添加吧</div>: this.state.comments.map(
                            (comment, index) => (
                                <Comment key={index} username={comment.username || comment.userId} headImageUrl={comment.headImageUrl || "http://192.168.1.110:5000/headImageUrl.jpg"} context={comment.context}/>
                            )
                        )
                }
                <AddComment addComment={this.addComment.bind(this)}/>
            </div>
        );
    }
}