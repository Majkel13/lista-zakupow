import React, { Component } from 'react';
import NewItemForm from './NewItemForm';
import styled from 'styled-components';
import ls from 'local-storage';

const Container = styled.div`
background: #2f2143;
width: 80%;
margin: 0 auto;
border-radius: 25px;
padding: 20px;
margin-top: 30px;
max-width: 680px;
`

const Header = styled.h1`
 color: #00a7fa; 
 text-align:center;
`
const Delete = styled.div`
color: #b13418;


:hover{
    color: #dd1111;
    cursor: pointer;
}
`
const Row = styled.div`
display: flex;
justify-content: space-between;
background: #343744;
border-radius: 10px;
padding: 14px;
margin-bottom: 7px;
margin-top: 7px;
`
const Item = styled.div`

cursor: pointer;
color: ${props => props.done ? 'black' : '#d572a0'};
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
        this.setState({tasks: ls.get('tasks')})
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