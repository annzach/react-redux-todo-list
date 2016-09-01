export function createTodo(todo){
  return{
    type: 'CREATE_TODO',
    payload: {todo}
  }
}


export function deleteMe(index){
  return{
    type: 'DELETE_ME',
    payload: {index}
  }
}

export function updateMe(newVal,index){
  console.log("inside aqction", newVal,index);
  return{
    type: 'UPDATE_ME',
    payload: {newVal,index}
  }
}