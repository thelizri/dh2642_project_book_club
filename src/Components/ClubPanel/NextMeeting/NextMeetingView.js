import React from "react";
import "./NextMeetingStyle.css";
import ContentEditable from 'react-contenteditable';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NextMeetingView = function( {
                                      isAdmin, meetingAddress,
                                      meetingDate, voteDate,
                                      meetingDescription, isOnline,
                                      onlineOrPhysical, newDescription,
                                      newAddress,
                                      newMeetingDate, newVoteDate } ) {

    const onSwitch = ( event ) => {
        onlineOrPhysical( event.target.value );
    }
    const descriptionInput = event => {
        newDescription( event.target.value );
    }
    const addressInput = event => {
        newAddress( event.target.value );
    };
    const meetingDateInput = event => {
        newMeetingDate( event );
    };

    const voteDateInput = event => {
        newVoteDate( event );
    };

    function radioOrText(isAdmin){
        if(!isAdmin){
            return (<td className={ "text-muted" }>physical</td>);
        }
        return(<td>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioTypeMeetingPhysical"
                       value="physical" onChange={onSwitch}/>
                <label className="form-check-label" htmlFor="inlineRadioTypeMeetingPhysical1">Physical</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioTypeMeetingOnline"
                       value="online" onChange={onSwitch}/>
                <label className="form-check-label" htmlFor="inlineRadioTypeMeetingOnline1">Online</label>
            </div>
        </td>);
    }


    return ( <div className={ "container" }>
        <div><h1 id={ "header24ClubPanelView" }>Next Meeting</h1></div>
        <table className="table table-sm bg-white table-borderless"
               id={ "table" }>
            <thead id={ "headNextMeeting" }>
                <tr>
                    <th><span>Meeting</span><span contentEditable={isAdmin} id={"meetingNumber"}></span></th>
                </tr>
            </thead>
            <tbody id={ "bodyNextMeeting" }>
                <tr>
                    <td>Type</td>
                </tr>
                <tr>
                    {radioOrText(isAdmin)}
                </tr>
                <tr>
                    <td>Time & Date</td>
                </tr>
                <tr>
                    <td>
                        <DatePicker
                            selected={new Date(meetingDate)}
                            onChange={(date) => meetingDateInput(date)}
                            showTimeInput
                            dateFormat="MM/dd/yyyy h:mm aa"
                            id={"datePickerMeeting"}
                        />
                    </td>
                </tr>
                <tr>
                    <td>Vote Deadline</td>
                </tr>
                <tr>
                    <td>
                        <DatePicker
                            selected={new Date(voteDate)}
                            onChange={(date) => voteDateInput(date)}
                            showTimeInput
                            dateFormat="MM/dd/yyyy h:mm aa"
                            id={"datePickerMeeting"}
                        />
                    </td>
                </tr>
                <tr>
                    <td>{isOnline ? 'Link' : 'Location'}</td>
                </tr>
                <tr>
                    <td>
                        <ContentEditable html={meetingDescription} disabled={!isAdmin} onChange={descriptionInput} className={"text-muted"} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <ContentEditable html={meetingAddress} disabled={!isAdmin} onChange={addressInput} className={"text-muted"} />
                    </td>
                </tr>
            </tbody>
        </table>
    </div> );
}

export default NextMeetingView;