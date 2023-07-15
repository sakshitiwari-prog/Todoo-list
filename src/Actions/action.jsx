import { CONSTANT } from "../Constants"
export const addtolist=(data)=>{
    // if(data){
    return {
        type:CONSTANT.ADD_TO_LIST,
        payload:data
    }
}
// }
// export const removetolist=(id)=>{
//     return {
//         type:CONSTANT.REMOVE_TO_LIST,
//         payload:id
//     }
// }
export const RemoveFromApi=(id)=>{
    return {
        type:CONSTANT.REMOVE_FROM_API,
        payload:id
    }
}
export const PushToApi=(data)=>{
    return {
        type:CONSTANT.PUSH_TO_API,
        payload:data
    }
}
export const fetchData=()=>{
    return {
        type:CONSTANT.FETCH_Data,
    }
}
export const ChangesToApi=(data)=>{
    return {
        type:CONSTANT.CHANGE_TO_API,
        payload:data
    }
}