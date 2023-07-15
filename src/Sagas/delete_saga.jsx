import { takeLatest,call,put } from "redux-saga/effects";
import {addtolist} from '../Actions/action'
async function Deleteapi(id){
    const res = await fetch(`http://localhost:3001/lists/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const res1 = await fetch('http://localhost:3001/lists',{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const finalRes = await res1.json();
    // console.log(finalRes);
    return finalRes
}
function* onRemoveFromApi(e){
    const data=yield Deleteapi(e.payload)
    yield put(addtolist(data));
    
}

function * onRemove(){
    yield takeLatest('REMOVE_FROM_API',onRemoveFromApi);
}
export default onRemove;
