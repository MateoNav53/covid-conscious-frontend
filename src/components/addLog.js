import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function AddLog() {
    
    const [logLocation, setLogLocation] = useState('')
    const [logDate, setLogDate] = useState(null)
    // const [logItem, setLogItem] = useState()
    const [logDuration, setLogDuration] = useState('')
    const [logInteractions, setLogInteractions] = useState('')

    // function logData() {
    //     console.log(logDate)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLogLocation(e.target.value)
        setLogDate(e.target.value)
        setLogDuration(e.target.value)
        setLogInteractions(e.target.value)
        console.log(logLocation)
        console.log(logDate)
        console.log(logDuration)
        console.log(logInteractions)
        e.target.reset()
    }

    return(
        <div>
            <form className="col-md-8 offset-md-2" onSubmit={handleSubmit}>
                <h1 className="form-group add-log-header">Add New Activities Log</h1>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" placeholder="Enter location" value={logLocation} onChange={e => setLogLocation(e.target.value)} id="location" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="date-of-log">Date</label>
                    <DatePicker selected={logDate} onChange={date => setLogDate(date)} id="date-of-log" className="form-control" maxDate={new Date()}/>
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Time spent at location(minutes)</label>
                    <input type="number" placeholder ="Enter time spent" id="duration" className="form-control" value={logDuration} onChange={e => setLogDuration(e.target.value)}></input>
                </div>
                <div className="form-group">
                <label htmlFor="interactions">Interactions within 6 feet</label>
                <input type="number" placeholder="Enter number" id="interactions" className="form-control" value={logInteractions} onChange={e => setLogInteractions(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary">Add Log</button>
            </form>
        </div>
    )
}

export default AddLog;