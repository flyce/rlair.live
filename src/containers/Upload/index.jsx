import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import TitleBar from '../../components/TitleBar';
import UploadVideo from '../../components/UploadVideo';

class MemberCenter extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        window.document.title = "上传视频 - rlair.live";
    }

    render() {
        return (
            <div>
                <TitleBar title="上传视频" />
                <UploadVideo />
            </div>
        )
    }
}

export default MemberCenter;
