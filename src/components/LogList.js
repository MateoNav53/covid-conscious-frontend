import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LogList() {

    const [logTable, setLogTable] = useState([])
    let baseInteractions = 0
    const [totalInteractions, setTotalInteractions] = useState(baseInteractions)

    useEffect(() => {
        axios.get('http://localhost:7000/log/')
            .then(res => {
                setLogTable(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deleteLog = (_id, e) => {
        e.preventDefault()
        setLogTable(logTable.filter((selected) => selected._id !== _id))
        axios.delete('http://localhost:7000/log/'+_id)
            .then(res => console.log(res.data))
    }

    return (
        <div>
            {/* will also need to put users interaction and place count in the last 14 days on here */}
            {/* Just display all log data here in a table row.
            Add an edit button that goes to the individual log */}
            <h1 className="text-center">View Log History</h1>
            <h3 className="offset-md-1">Username</h3>
            <p className="counter offset-md-1">You've come within 6 feet of {totalInteractions} people in the last 14 days</p>
            <table className="table table-hover text-center">
                {/* Display Username */}
                {/* Display 14-day count */}
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Location</th>
                        <th scope="col">Duration(in minutes)</th>
                        <th scope="col"># of Interactions within 6 Feet</th>
                        <th scope="col">Delete Log</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        logTable.map(logs => {
                            
                            {/* if(logs.interactions){
                                setTotalInteractions()
                                logs.interactions+= baseInteractions
                                console.log(totalInteractions)
                            } */}
                                return (
                                    <tr key={logs._id}>
                                        <td>{logs.logDate.substring(0, 10)}</td>
                                        <td>{logs.location}</td>
                                        <td>{logs.duration}</td>
                                        <td>{logs.interactions}</td>
                                        <td>
                                        <button className="btn btn-danger" type="submit" name="delete" onClick={(e) => deleteLog(logs._id, e)}>Delete</button>
                                        </td>
                                    </tr>
                                ) 
                            }
                        )
                    }
                </tbody>
            </table>

        </div>


    )
}

export default LogList;