import React,{Component} from 'react';
import './Counter.scss';

class Counter extends Component{
    constructor(props){
        super(props);
        this.count = this.props.count;
        this.increase = this.props.increase;
        this.decrease = this.props.decrease;
    }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(nextProps.count !== this.props.count) return true;
    //     else return false;
    // }

    // (prevProps, prevState, snapshot) {
    //     console.log(this.props.count);
    //     if(prevProps.count !== this.props.count) return true;
    //     else return false;
    // }

    render(){
        console.log("red")
        return(
            <div className="counter">
                <button onClick={this.decrease}>-</button>
                <div>{this.props.count}</div>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}

export default Counter;
