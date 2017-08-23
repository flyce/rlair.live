import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        )
    }
}

export default Demo;
