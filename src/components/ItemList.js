import React, { Component } from 'react';



class ItemList extends Component{

    static defaultProps = {
        done: false
    }

    state={
        done: this.props.done
    }

    toggleDone = ()=>{
        this.setState({done: !this.state.done})
    }

    render(){
        const {text} = this.props;
        return(
        <div  done={this.state.done} title="Oznacz jeśli kupione">{text}</div>
        )
    }
}

export default ItemList