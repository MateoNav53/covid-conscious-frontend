import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function AddLog() {
    
    const [logLocation, setLogLocation] = useState('')
    const [logDate, setLogDate] = useState(null)
    // const [logDuration, setLogDuration] = useState(null)
    // const [logInteraction, setLogInteraction] = useState(null)

    return(
        <div>
            <form className="col-md-8 offset-md-2">
                <h1 className="form-group add-log-header">Record your physical interactions and activities</h1>
                <div className="form-group">
                    <label for="location" value={logLocation} onSubmit={location => setLogLocation(location)}>Location</label>
                    <input type="text" placeholder="Location" id="location" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label for="date-of-log">Date</label>
                    <DatePicker selected={logDate} onChange={date => setLogDate(date)} id="date-of-log" className="form-control" maxDate={new Date()}/>
                </div>
                <div className="form-group">
                    <label for="duration">Time spent at location(minutes)</label>
                    <input type="number" placeholder ="Enter" id="duration" className="form-control"></input>
                </div>
                <div className="form-group">
                <label for="interactions">Interactions within 6 feet</label>
                <input type="number" placeholder="Enter" id="interactions" className="form-control"></input>
                </div>
                <button type="submit" className="btn btn-primary">Add Log</button>
            </form>
        </div>
    )
}

export default AddLog;