import React, { Component } from 'react';
import TodoApp from './TodoApp'

export default class TodoList extends Component {
  constructor(){
    super();
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
  }
  
  delete(index){
   console.log("delete me..pls" , index);
   this.props.deleteMe(index);
  }

  update(index){
    var newVal = prompt("Enter the new value")
    console.log(newVal);
    console.log("update me");
    this.props.updateMe(newVal,index);
  }

  render() {

    let {todos} = this.props;
    let Todos =todos.map((todo,index)=> {
      return (
        <li key ={index}>{todo}
            <button onClick={this.delete.bind(null,index)}><span className="glyphicon glyphicon-remove"></span></button>
            <button onClick={this.update.bind(null,index)}><span className="glyphicon glyphicon-pencil"></span></button> 
        </li>)
    })

     return (
     <ol>
       {Todos}
     </ol>
    )
  }
}
