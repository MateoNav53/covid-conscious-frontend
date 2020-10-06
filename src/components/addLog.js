import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";

function AddLog() {
    const [fullLog, setFullLog] = useState({
        logDate: new Date(),
        location: '',
        duration: 0,
        interactions: 0
    })

    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFullLog({
            location: e.target.value,
            logDate: e.target.selected,
            duration: e.target.value,
            interactions: e.target.value
        })
        fetch('https://covid-conscious.herokuapp.com/user/covidlog/add', {
            body: JSON.stringify(fullLog),
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        })
        .then(res => {
            console.log(res.data)
            history.push('/loglist')
        })
    }

    return(
        <div>
            <form action="" className="col-md-8 offset-md-2" method="post" onSubmit={handleSubmit}>
                <h1 className="form-group add-log-header">Add New Activities Log</h1>
                <div className="form-group">
                    <label htmlFor="log-location">Location</label>
                    <input type="text" placeholder="Enter location" name="location" value={fullLog.location||""} onChange={e => setFullLog({...fullLog, location: e.target.value})} id="log-location" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="date-of-log">Date</label>
                    <DatePicker selected={fullLog.logDate||new Date()} name="logDate" onChange={date => setFullLog({...fullLog, logDate:date})} id="date-of-log" className="form-control" maxDate={new Date()} minDate={subDays(new Date(), 14)} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Time spent at location(minutes)</label>
                    <input type="number" placeholder ="Enter time spent" id="duration" name="duration" className="form-control" value={fullLog.duration||""} onChange={e => setFullLog({...fullLog, duration: e.target.value})} required></input>
                </div>
                <div className="form-group">
                <label htmlFor="interactions">Interactions within 6 feet</label>
                <input type="number" placeholder="Enter number" id="interactions" name="interactions" className="form-control" value={fullLog.interactions||""} onChange={e => setFullLog({...fullLog, interactions: e.target.value})} required></input>
                </div>
                <button type="submit" className="btn btn-warning">Add Log</button>
            </form>
        </div>
    )
}

export default AddLog;