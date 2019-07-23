import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../store/modules/home';
import {Counter} from "../Components/home/Counter";
import {Info} from '../Components/home/Info';

class HomeContainer extends Component{
    constructor(props) {
        super(props);
         const {HomeActions} = this.props;

        this.increaseCount = () => {
            HomeActions.increase();
            console.log(this.props);
        };
        this.decreaseCount = () => {
            HomeActions.decrease();
        };
    }




    render() {
        return (
            <Fragment>
                <Info/>
                <Counter count={this.props.count} increase={this.increaseCount} decrease={this.decreaseCount}/>
            </Fragment>
        );
    }
}

export default connect(
    state => {
        return {
            count: state.home.get('count')
        }
    },
    dispatch => ({
        HomeActions: bindActionCreators(homeActions,dispatch)
    })
)(HomeContainer);