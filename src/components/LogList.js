import React, { useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';
import LogService from '../services/LogService';

function LogList() {
    const [logTable, setLogTable] = useState([])
    const GetContext = useContext(AuthContext)
    let baseInteractions = 0
    const [totalInteractions, setTotalInteractions] = useState(baseInteractions)
    // let history = useHistory()

    useEffect(()=>{
        LogService.getLogs().then(data =>{
            console.log(data)
            setLogTable(data.logs);
        });
    },[]);

    const deleteLog = (_id, e) => {
        e.preventDefault()
        setLogTable(logTable.filter((selected) => selected._id !== _id))
        axios.delete('/user/covidlog/'+_id)
            .then(res => console.log(res.data))
    }

    // const counter = () => {
    //     for(logTable.interactions of logTable) {
    //         setTotalInteractions(() => {
    //             logTable.interactions += totalInteractions
    //             console.log(totalInteractions)
    //         })
    //     }
    // }

    // setTotalInteractions({
    //     for (let interaction of logTable.interactions) {
    //         interaction += totalInteractions
    //     }
    // })
    // for(let interaction of logTable.interactions){
    //     console.log(interaction)
    // }
        

    return (
        <div>
            <h1 className="text-center">View Log History</h1>
            <h3 className="offset-md-1">Hello {GetContext.user.username}</h3>
            <p className="counter offset-md-1">You've come within 6 feet of {totalInteractions} people in the last 14 days</p>
            <table className="table table-hover text-center">
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
                        .sort((a, b) => a < b ? 1: -1)
                    }
                </tbody>
            </table>

        </div>


    )
}

export default LogList;