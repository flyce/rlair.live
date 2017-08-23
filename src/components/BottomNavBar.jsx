import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import ExploreIcon from 'material-ui-icons/Explore';
// import CategoryIcon from 'material-ui-icons/GroupWork';
import AccountIcon from 'material-ui-icons/AccountCircle';

import history from '../router/history';

function getIndex() {
    let index = 0;
    switch (window.location.pathname) {
        case '/':
            index = 0;
            break;
        // case '/about':
        //     index = 1;
        //     break;
        case '/member':
            index = 1;
            break;
        default:
            index = 0;
            break;
    }
    return index;
}


export default class BottomNavBar extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: getIndex(),
        };
    }

    handleChange = (event, index) => {
        this.setState({ index });
        switch(index) {
            case 0:
                history.push('/');
                break;
            // case 1:
            //     history.push('/about');
            //     break;
            case 1:
                history.push('/member');
                break;
            default: history.push('/member');
        }
    };

    render() {
        const { index } = this.state;

        return (
            <div className="bottomNavBar">
                <BottomNavigation value={index} onChange={this.handleChange} showLabels>
                    <BottomNavigationButton label="发现" icon={<ExploreIcon />} />
                    {/*<BottomNavigationButton label="分类" icon={<CategoryIcon />} />*/}
                    <BottomNavigationButton label="我的" icon={<AccountIcon />} />
                </BottomNavigation>
            </div>
        );
    }
}