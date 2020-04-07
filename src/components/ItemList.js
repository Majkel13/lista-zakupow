import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.div`

cursor: pointer;
color: ${props => props.done ? 'black' : '#d572a0'};
text-decoration: ${props => props.done ? `line-through` : 'auto'};
`

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
        <Item onClick={this.toggleDone} done={this.state.done} title="Oznacz jeśli kupione">{text}</Item>
        )
    }
}

export default ItemList