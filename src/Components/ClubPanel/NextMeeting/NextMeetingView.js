import React from "react";
import "./NextMeetingStyle.css";
import Form from "react-bootstrap/Form";



function NextMeetingView( props ) {
    // let currentDate = new Date().toJSON().slice( 0, 10 );
    // console.log( currentDate ); // "2022-06-17"


    return ( <div className={ "container" }>
        <div><h1 id={ "header24ClubPanelView" }>Next Meeting</h1></div>
        <table className="table table-sm bg-white table-borderless"
               id={ "table" }>
            <thead id={ "headNextMeeting" }>
            <tr>
                <th><span>Meeting #</span><span contentEditable={props.isAdmin} id={"meetingNumber"} suppressContentEditableWarning={true}>23</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Type</td>
            </tr>
            <tr>
                {radioOrText(props.isAdmin)}
            </tr>
            <tr>
                <td>Time & Date</td>
            </tr>
            <tr>
                <td className={ "text-muted" } contentEditable={props.isAdmin} suppressContentEditableWarning={true}>2022/06/26 15:00</td>
            </tr>
            <tr>
                <td>{props.isOnline ? 'Link' : 'Location'}</td>
            </tr>
            <tr>
                <td className={ "text-muted" } contentEditable={props.isAdmin} suppressContentEditableWarning={true}>Cafe blåbär</td>
            </tr>
            <tr>
                <td className={ "text-muted" } contentEditable={props.isAdmin} suppressContentEditableWarning={true}>Fleminggatan 53, 112 32
                    Stockholm
                </td>
            </tr>
            </tbody>
        </table>
    </div> );
}

function radioOrText(isAdmin){
    if(!isAdmin){
        return (<td className={ "text-muted" }>physical</td>);
    }
    return(<td>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioTypeMeetingPhysical"
                   value="physical"/>
                <label className="form-check-label" htmlFor="inlineRadioTypeMeetingPhysical1">Physical</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioTypeMeetingOnline"
                   value="online"/>
            <label className="form-check-label" htmlFor="inlineRadioTypeMeetingOnline1">Online</label>
        </div>
    </td>);
}

export default NextMeetingView;