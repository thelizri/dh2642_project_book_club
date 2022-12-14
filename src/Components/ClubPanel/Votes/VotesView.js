import React from "react";
import "./VotesStyle.css";
import VotesModal from "./VotesModal/VotesModal";

function renderVotesCB( member, index ) {
    if( member.voted ) {
        return ( <tr key={index}>
            <td>{ member.name }</td>
            <td style={ { color : 'green' } }>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                     fill="currentColor"
                     className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path
                        d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
            </td>
        </tr> );
    }
    return ( <tr key={index}>
        <td>{ member.name }</td>
        <td style={ { color : 'gray', opacity : 0.5 } }>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                 fill="currentColor"
                 className="bi bi-check-circle" viewBox="0 0 16 16">
                <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path
                    d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
        </td>
    </tr> );
}

const VotesView = function (
    {
        clubMembers = [ {name : test, voted: false} ]
    } ) {
    //Example


    return ( <div className={ "container" } id={ "container" }>
        <div><h1 id={ "header24ClubPanelView" }>Votes</h1></div>
        <table className="table table-sm bg-white table-borderless"
               id={ "table" }>
            <thead id={ "headNextMeeting" }>
            <tr>
                <th>Member</th>
                <th>Has Voted</th>
            </tr>
            </thead>
            <tbody>
            { clubMembers.map( renderVotesCB ) }
            </tbody>
        </table>
    </div> );
}

export default VotesView;