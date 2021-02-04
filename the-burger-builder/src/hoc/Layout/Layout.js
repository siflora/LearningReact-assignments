import React, { Component} from 'react';
import classes from './Layout.module.css';

import Aux from '../Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer:false})
    };

    toggleSideDrawerHandler = () => {
        this.setState((prevState)=>{
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        })
    };

    render() {
        return(
            <Aux>
                <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler}/>
                <SideDrawer open={this.state.showSideDrawer}
                closed={this.closeSideDrawerHandler}/>
                <main className={classes.Content}>
                {this.props.children}
                </main>
	        </Aux>
        )
    }

}

export default Layout;