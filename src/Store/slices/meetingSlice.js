import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    description : "KTH Bibliotek",
    address : "Kistagången 16, 164 40 Kista",
    online : false,
    meetingLink : "https://kth-se.zoom.us/j/3446757312312435",
    meetingDate : new Date().toISOString().slice(0, 16),
    voteDeadline: new Date().toISOString().slice(0, 16),
}

export const meeting = createSlice( {
    name : "meeting",
    initialState,
    reducers : {
        setOnline : ( state, { payload } ) => {
            state.online = payload;
        },
        setDescription : ( state, { payload } ) => {
            state.description = payload;
        },
        setAddress : ( state, { payload } ) => {
            state.address = payload;
        },
        setMeetingLink : ( state, { payload } ) => {
            state.meetingLink = payload;
        },
        setMeetingDate : ( state, { payload } ) => {
            state.meetingDate = payload;
        },
        setVoteDeadline : ( state, { payload } ) => {
            state.voteDeadline = payload;
        },
    }
} )

export const {
    setAddress,
    setDescription,
    setOnline,
    setCurrentMeeting,
    setMeetingLink,
    setMeetingDate,
    setVoteDeadline
} = meeting.actions;

export const selectCurrentlyReadingId = state => {
   const today = new Date();
   const voteDeadline = new Date(state.meeting.voteDeadline);

   return voteDeadline > today;
}