import { getByPlaceholderText } from '@testing-library/react';
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        
    };    

Handleincrement =()=>{
    this.setState({count: this.state.count  +1});
};

    render() { 
        
        return (
        <React.Fragment>
          
            <span  className={this.GetBadges()}> {this.formatCount()}</span>
            <button 
            onClick={this.Handleincrement}
            className= "btn btn-secondry btn-sm"
            >
                
                Increment</button>
            
            </React.Fragment>
            );
        }
    GetBadges() {
        let classes = 'badge m2 badge-';
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

             formatCount(){
            const {count}= this.state;
            return count=== 0 ? "Zero": count;

            
    }
}
 
export default Counter;