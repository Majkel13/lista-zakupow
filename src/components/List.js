import React, { Component } from 'react';
import NewItemForm from './NewItemForm';
import styled from 'styled-components';
import ls from 'local-storage';

const Container = styled.div`


border: 1px solid #1969ba;
border-radius: 10px;
background: #1969ba;
background: -webkit-linear-gradient(top, #1969ba 0, #0f4174 100%);
background: linear-gradient(to bottom, #1969ba 0, #0f4174 100%);
-webkit-box-shadow: inset 0px 1px 1px 0px #A2D1FF;
box-shadow: inset 0px 1px 1px 0px #A2D1FF;
padding: 20px;
color: #fff;
font-size: 15px;
line-height: 1.54em;
padding: 20px;
margin: 0 auto;
margin-top: 30px;
max-width: 680px;
width: 80%;
`

const Header = styled.h1`
 color: #00a7fa; 
 text-align:center;
`
const Delete = styled.div`
color: #d00;

:hover{
    color: #f00;
    cursor: pointer;
}
`
const Row = styled.div`
display: flex;
justify-content: space-between;
border-radius: 10px;
border-bottom: #fff solid;
padding: 15px 5px 5px 10px;
margin-bottom: 7px;
margin-top: 7px;
`
const Item = styled.div`

cursor: pointer;
color: ${props => props.done ? 'black' : '#FFFEB6'};
text-decoration: ${props => props.done ? `line-through` : 'auto'};
`


class List extends Component{


    static defaultProps = {
        tasks : [
           
        ]
    }

    state={
        tasks : this.props.tasks,
        draft: ''
    }

    componentDidMount(){
        this.setState({tasks: ls.get('tasks') || []})
    }

    updateDraft = event => {
        this.setState({draft: event.target.value})
    }
    
   addItem = () => {
    const {tasks, draft} = this.state;

    if(draft !== ''){
        const  listToUpdate = tasks;
        let id=1;        

        if(listToUpdate.length-1>=0){
            let lastElem =listToUpdate[listToUpdate.length-1];
            id= lastElem.id+1;
        }
        
        listToUpdate.push({text: draft, done: false, id: id});
        this.setState({tasks: listToUpdate, draft: ''});
        ls.set('tasks', tasks);

    }else{
        alert("Pole nie może być puste");
    }
   
}
addItemEnter = event =>{
    if(event.key === 'Enter'){
        this.addItem();
    }
}
update = (e,id) => {
        const {tasks} = this.state;
        const list = tasks;
        list.forEach(l => {
            if(id===l.id){
                 
                 l.done= !l.done
               
             }  
        });
             this.setState({tasks: list});
             ls.set('tasks', tasks);
}

    delete = (e,id) =>{
        const {tasks} = this.state;
        const list = tasks;
       var updateList = list.filter(function(value){ return value.id !== id;});
       this.setState({tasks: updateList});
       ls.set('tasks', updateList);
    }
    render(){
        const{tasks, draft} = this.state;
        return(
            <Container>
                <Header key="">Lista zakupów</Header>
                {tasks.map(task => 
                <Row key={task.id}  >
                    <Item  onClick={(e) => this.update(e, task.id)}  done={task.done} title="Oznacz jeśli kupione">{task.text}</Item>
                    <Delete  onClick={(e) => this.delete(e, task.id)}>usuń</Delete>
                </Row>)}
                <NewItemForm onSubmit={this.addItem} onChange={this.updateDraft} onKeyPress={this.addItemEnter} draft={draft}/>
            </Container>
        );
    }
} 

export default List;