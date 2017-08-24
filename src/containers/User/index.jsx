import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import TitleBar from '../../components/TitleBar';
import VipInfo from '../../components/UserInfo';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        window.document.title = "个人中心 - rlair.live";
    }

    render() {
        return (
            <div>
                <TitleBar title="个人中心"/>
                <VipInfo />
            </div>
        )
    }
}

export default User;
