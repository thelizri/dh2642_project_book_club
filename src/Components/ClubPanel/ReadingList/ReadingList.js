import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addVote,
    selectReadingList,
    setCurrentlySelectedId
} from "../../../Store/slices/clubSlice";
import ReadingListView from "./ReadingListView";

export const ReadingList = () => {
    const dispatch = useDispatch();
    // State of query
    const readingList = useSelector( selectReadingList );
    const userId = useSelector(state => state.auth.user.uid);
    const currentVote = useSelector(state => state.club.votes?.[userId])

    function handleVote(votedBookId) {
        dispatch(addVote( { votedBookId, userId } ));
    }

    function handleSelect( book ) {
        dispatch(setCurrentlySelectedId( book.googleBooksId ));
    }

    return <ReadingListView currentVote={currentVote}
                            handleVote={handleVote}
                            selectBook={handleSelect}
                            readingList={ readingList }/>;
};