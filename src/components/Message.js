import React from 'react';

const alertStyle = (props) => {
    let baseClass = "alert ";
    if(props.message.errorMessage)
        baseClass = baseClass + "alert-danger";
    else
        baseClass = baseClass + "alert-primary";
    
    return baseClass + " text-center"
}

const Message = props => {
    return(
        <div className={alertStyle(props)} role="alert">
            {props.message.messagBody}
        </div>
    )
}

export default Message;