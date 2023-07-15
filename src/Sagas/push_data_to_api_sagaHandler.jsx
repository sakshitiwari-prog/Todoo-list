import { takeLatest,call,put } from "redux-saga/effects";
import {addtolist} from '../Actions/action'
const apiurl="http://localhost:3001/lists"
async function Pushapi(data){
    const res = await fetch(apiurl,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            data:data
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
function* onPushToApi(e){
    const data=yield Pushapi(e.payload)
    yield put(addtolist(data));
    
}

function * onPush(){
    yield takeLatest('PUSH_TO_API',onPushToApi);
}
export default onPush;