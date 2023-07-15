import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import UpdateItem from './UpdateItem'
import { PushToApi, fetchData, RemoveFromApi } from '../Actions/action'
function Todo() {
    const mystate = useSelector(state => state.handles)
    // console.log(mystate);
    const [input, setInput] = useState('')
    const [isupdatestate, setIsupdatestate] = useState(-1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    function updateComp(id) {
        setIsupdatestate(id)
        // console.log(isupdatestate);
    }
    function inputCHangeHandler(event) {
        setInput(event.target.value)
    }
    function addtolistfun() {
        dispatch(PushToApi(input))
        setInput('')
    }
    function changeId(data) {
        setIsupdatestate(data)
    }
    return (
        <div style={{ width: '30rem', height: '30rem' }}>
            <div style={{ textAlign: 'center' }} className='mt-3 title mb-3'><u>Notepad</u></div>
            <div className="input-group mb-3 ">
                <input type="text" className="form-control" value={input} onChange={inputCHangeHandler} aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    {/* <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addtolistfun}>Add</button> */}
                    <button type="button" onClick={addtolistfun} className="btn btn-secondary">Add to List</button>
                </div>
            </div>
            {/* <div className="list"> */}
            <ul className="list-group ">



                {mystate.todoList.map((item, index) => (
                    item.id === isupdatestate ? <UpdateItem changeId={changeId} data={item.data} index={index} id={item.id}></UpdateItem> :
                        <li key={index} className="list-group-item " aria-current="true" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}><span>{index + 1}. {item.data}</span></div>

                            <div style={{ display: "flex", alignItems: 'center' }} >
                                <button className="btn btn btn-danger mx-3" type="button" id="button-addon2" onClick={() => dispatch(RemoveFromApi(item.id))} >delete</button>
                                <button className="btn btn btn-secondary mx-3" type="button" id="button-addon2" onClick={() => updateComp(item.id)}>update</button>
                            </div>
                        </li>
                ))}
                {/* </div> */}
            </ul>
        </div>
    )
}

export default Todo
