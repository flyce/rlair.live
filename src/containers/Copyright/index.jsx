import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import TitleBar from '../../components/TitleBar';
import Copy from '../../components/Copyright';

class Copyright extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        window.document.title = "版权信息 - rlair.live";
    }

    render() {
        return (
            <div>
                <TitleBar title="版权信息"/>
                <Copy />
            </div>
        )
    }
}

export default Copyright;
