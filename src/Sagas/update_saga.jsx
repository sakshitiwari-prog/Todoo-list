import { takeLatest,call,put } from "redux-saga/effects";
import {addtolist} from '../Actions/action'
const apiurl="http://localhost:3001/lists"
async function ChangeApi(data){
    const res = await fetch(`http://localhost:3001/lists/${data.payload.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            data:data.payload.input
        })
    })
    // console.log(res);
    const res1 = await fetch(apiurl,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const finalRes = await res1.json();

    // console.log(finalRes);
    return finalRes
}
function* onChangeToApi(e){
    // console.log(e);
    const data=yield ChangeApi(e)
    yield put(addtolist(data));
    
}

function * onChange(){
    yield takeLatest('CHANGE_TO_API',onChangeToApi);
}
export default onChange;