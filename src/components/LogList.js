import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';
import LogService from '../services/LogService';

function LogList() {

    const [logTable, setLogTable] = useState([])
    const GetContext = useContext(AuthContext)
    let baseInteractions = 0
    const [totalInteractions, setTotalInteractions] = useState(baseInteractions)

    // useEffect(() => {
    //     axios.get('http://localhost:7000/user/covidlog')
    //         // .then(res => {
    //         //     // GetContext.user.setIsAuthenticated(data.isAuthenticated)
    //         //     if(res.status !== 401){
    //         //         return (data => data);
    //         //     }
    //         //     else
    //         //         return {message : {messsagBody : "UnAuthorized", errorMessage : true}};
    //         // })
    //         // .catch(err => {
    //         //     console.log(err)
    //         // })
    //         .then(res => {
    //             if(res.status !== 401) {
    //                 setLogTable(res.data);
    //         }})
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [])

    useEffect(()=>{
        LogService.getLogs().then(data =>{
            setLogTable(data.logTable);
        });
    },[]);

    const deleteLog = (_id, e) => {
        e.preventDefault()
        setLogTable(logTable.filter((selected) => selected._id !== _id))
        axios.delete('http://localhost:7000/user/covidlog/'+_id)
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
                        logTable && logTable.map(logs => { 
                                {/* setTotalInteractions(logs.interactions += baseInteractions) */}
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