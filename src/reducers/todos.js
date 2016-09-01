export default function todos(state = [], action){

  switch(action.type){
    case 'CREATE_TODO':
      return state.concat(action.payload.todo);
      break;

     case 'DELETE_ME':
       console.log('action.payload.index',action.payload.index)
       return state.filter((todo,index)=>{
          
          if(action.payload.index !=index){
            return true;
          }
          else{
            return false;
          }
      
        })
      break;

      case 'UPDATE_ME':
        return state.map((newVal,index)=>{
          if(action.payload.index == index) {
            return action.payload.newVal;
          }
          else{
            return newVal;
          }
        })
      break;
      
    default:
      return state;
  }
}