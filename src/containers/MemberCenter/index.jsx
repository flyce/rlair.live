import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import BottomNavBar from '../../components/BottomNavBar';
import Member from '../../components/Member';

class MemberCenter extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        window.document.title = "会员中心 - rlair.live";
    }

    render() {
        return (
            <div style={{marginBottom: '64px',}}>
                <Member />
                <BottomNavBar />
            </div>
        )
    }
}

export default MemberCenter;
