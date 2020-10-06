import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import LogService from '../services/LogService';

function LogList() {
    const [logTable, setLogTable] = useState([])
    const GetContext = useContext(AuthContext)
    let interactionsCount = useRef(0)
    

    useEffect(()=>{
        LogService.getLogs().then(data =>{
            data.logs.sort((a, b) => a.logDate < b.logDate ? 1 : -1);
            data.logs.forEach((log) => {
                let d = new Date()
                d.setDate(d.getDate() - 14)
                if (log.logDate > d.toISOString()){
                    interactionsCount.current += log.interactions
                }                
            })
            setLogTable(data.logs);
        });
    },[interactionsCount]);

    const deleteLog = (_id, e) => {
        e.preventDefault()
        setLogTable(logTable.filter((selected) => selected._id !== _id))
        let deletedLog = logTable.find((deleted) => deleted._id === _id)
        let d = new Date()
        d.setDate(d.getDate() - 14)
        if (deletedLog.logDate > d.toISOString()){
            interactionsCount.current -= deletedLog.interactions
        }
        fetch('https://covid-conscious.herokuapp.com/user/covidlog/'+_id, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        
    }

    return (
        <div>
            <h1 className="view-log-header">View Log History</h1>
            <h3 className="view-log-greeting">Hello {GetContext.user.username},</h3>
            <div className="d-flex flex-wrap">
                <p className="counter col-md-7">You've come within 6 feet of {interactionsCount.current} people in the last 14 days</p>
                <Link to="/addlog">
                    <button type="button" className="btn btn-warning add-btn">Add New Log</button>
                </Link>
            </div>
            <table className="table table-hover text-center">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Location</th>
                        <th scope="col">Duration (in minutes)</th>
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
                    }
                </tbody>
            </table>

        </div>


    )
}

export default LogList;