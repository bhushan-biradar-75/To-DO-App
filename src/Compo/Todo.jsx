import React, { useState } from 'react'

const Todo = () => {

    const [state, setstate] = useState({
        task1: "",
        description: "",
        Date: "",
        id: ""
    })

    const [data, setdata] = useState([
    ])
    const Submit = () => {
        let foo1 = new Date(state.Date)
        let foo3 = foo1.valueOf()
        console.log(foo3)
        state.duedate = foo3
        let foo = new Date
        let foo4 = foo.valueOf()
        state.bollen = false;
        state.currentdate = foo4
        state.id = Math.floor(Math.random() * 10000)
        setdata([...data, state])
        console.log(state)
    }

    const handleChanage = (event) => {
        setstate({ ...state, [event.target.name]: event.target.value })
    }

    const deleteone = (id) => {
        setdata(data.filter((ele) => {
            if (ele.id == id) {
                console.log("hi")
            } else {
                console.log("hi2")
                return ele
            }
            // return ele.id !== id 
        }))
    }

    function checked(id) {
        console.log(id);
        setdata(
            data.map((ele) => {
                if (ele.id == id) {
                    if (ele.bollen == false) {
                        ele.bollen = true;
                    } else {
                        ele.bollen = false;
                    }
                }
                return ele;
            })
        );
    }


    return (

        <div onSubmit={(Submit)}>
            <div className="container-fluid">
                <div className="main">
                    <div
                        className="main-layout">
                        <h1 style={{ backgroundColor: "#e86ed0", color: "white" }} className='text-center mt-3'><marquee>To-Do-List</marquee></h1>
                        <label className='mt-3'><b>Task Title*</b></label>
                        <input style={{ border: 'solid 1px black' }} value={data.task1} type="text" onChange={handleChanage} name='task1' placeholder='Enter task title' className='form-control mt-4' required />

                        <label className='mt-4'><b>Description*</b></label>
                        <input style={{ border: 'solid 1px black' }} value={data.description} type="text" onChange={handleChanage} name='description' placeholder='Enter Description' className='form-control mt-4' required />

                        <label className='mt-4'><b>Date*</b></label>
                        <input style={{ border: 'solid 1px black' }} name='Date' onChange={handleChanage} value={data.Date} className='mx-4' type='date' required />
                        <br />

                        <button type='submit' className='btns' onClick={Submit} >Submit</button>
                        <div>
                            <>
                                <table className='table'>

                                    <thead>
                                        <tr>
                                            {/* <th scope='col'>Sr No</th> */}
                                            <th scope='col'>Done</th>
                                            <th scope='col'>Task Title</th>
                                            <th scope='col'>Description</th>
                                            <th scope='col'>Due Date</th>
                                            <th scope='col'>Check Date</th>
                                            <th scope='col'>Status</th>
                                        </tr>
                                    </thead>

                                    <thead>
                                        {
                                            data.map((d) => {
                                                return (

                                                    <tr key={d.id}>
                                                        <input className='checkbox' type='checkbox' onChange={() => checked(d.id)} />
                                                        <td className='task' style={{
                                                            textDecoration: d.bollen
                                                                ? "line-through"
                                                                : "none",
                                                        }} >{d.task1}</td>
                                                        <td className='des' style={{
                                                            textDecoration: d.bollen
                                                                ? "line-through"
                                                                : "none",
                                                        }}> {d.description}</td>
                                                        {
                                                            d.currentdate > d.duedate ? <td style={{ color: 'red', border: 'solid 2px red' }}>DUE DATE PASS </td> : <td style={{ color: 'green', border: 'solid 2px green' }}>DUE DATE IS NOT PASS</td>
                                                        }
                                                        <td className='date'>{d.Date}</td>
                                                        <button onClick={() => deleteone(d.id)} style={{ backgroundColor: '#134074', color: 'white' }} type='button' className='delete mx-1'>Delete</button>
                                                    </tr>

                                                )
                                            })
                                        }

                                    </thead>
                                </table>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Todo

