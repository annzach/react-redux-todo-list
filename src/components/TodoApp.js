import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createTodo, deleteMe, updateMe} from '../actions/TodoActions'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class TodoApp extends Component{
  render(){
  let {todos, createTodo , deleteMe, updateMe} =  this.props;
    return(
      <div>
      <TodoForm createTodo={createTodo}/>
      <TodoList todos ={todos} deleteMe={deleteMe} updateMe={updateMe}/>
      </div>
      )
  }
}


function mapStateToProps(state){
 return {
  todos:state.todos
 }
}


function mapDispatcherToProps(dispatch){
  return {
  createTodo(todo){
    dispatch(createTodo(todo));
  },
  deleteMe(index){
    dispatch(deleteMe(index));
  },
  updateMe(newVal,index){
    console.log('inside map dispatcher',newVal);
    dispatch(updateMe(newVal,index));
  }
 }
}


export default connect (
  mapStateToProps,
  mapDispatcherToProps
)(TodoApp);