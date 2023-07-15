import { CONSTANT } from "../Constants"
const initialState={
    todoList:[]
}

export const handles=(state=initialState,action)=>{
    switch(action.type){

        case CONSTANT.ADD_TO_LIST:
            // console.log(action.payload);
            return {...state,todoList:[...action.payload]}

        // case CONSTANT.REMOVE_TO_LIST:
        //     const newtodoList=state.todoList.filter((todo)=> action.payload!==todo.id)

        //     return {...state,todoList:[...newtodoList]}
        
        default: return state
    }
}