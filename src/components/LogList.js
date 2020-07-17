import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LogList() {

    const [logTable, setLogTable] = useState([])

    useEffect(() => {
        axios.get('http://localhost:7000/log/')
            .then(res => {
                setLogTable(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    })


    return (
        <div>
            {/* going to need to map the results submitted from addLog to this page */}
            {/* will also need to put users interaction and place count in the last 14 days on here */}
            {/* Just display all log data here in a table row.
            Add an edit button that goes to the individual log */}
            <h1 className="text-center">View Log History</h1>
            <h3 className="offset-lg-1">Username</h3>
            <table className="table table-hover text-center">
                {/* Display Username */}
                {/* Display 14-day count */}
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Location</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Interactions</th>
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