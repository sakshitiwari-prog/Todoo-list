import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {ChangesToApi,fetchData} from '../Actions/action'
function UpdateItem({changeId,data,index,id}) {
  // console.log(mystate);
  const [input, setInput] = useState(data)
  const dispatch=useDispatch()
  function inputCHangeHandler(event)
    {
        setInput(event.target.value)
    }
    function addtolistfun(){
        dispatch(ChangesToApi({input,id}))
        changeId(-1)
    }
  return (
    // <div>
      <div className="input-group mb-3" key={index}>
                {index+1}.<input type="text" className="form-control" value={input} onChange={inputCHangeHandler} aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addtolistfun} >Update</button>
                </div>
            </div>
    // </div>
  )
}

export default UpdateItem
