import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import TitleBar from '../../components/TitleBar';
import AboutMe from '../../components/AboutMe';

class MemberCenter extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        window.document.title = "关于 - rlair.live";
    }

    render() {
        return (
            <div>
                <TitleBar title="关于"/>
                <AboutMe />
            </div>
        )
    }
}

export default MemberCenter;
