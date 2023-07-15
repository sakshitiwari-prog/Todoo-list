import { call, put, takeEvery } from 'redux-saga/effects'
import { addtolist } from '../Actions/action'
const apiurl="http://localhost:3001/lists"

async function getapi(){
    const res = await fetch(apiurl,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const finalRes = await res.json();
    // console.log(finalRes);
    return finalRes
}

function* fetchdata(){
    try{
        const data = yield call(getapi);
        // console.log(data)
        yield put(addtolist(data))
    }catch(e){
        // console.log(e);
    }
}
function* getsaga(){
    yield takeEvery('FETCH_Data', fetchdata)
}
export default getsaga