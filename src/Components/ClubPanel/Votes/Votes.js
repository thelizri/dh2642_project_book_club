import VotesView from "./VotesView";
import VotesModalView from "./VotesModal/VotesModalView";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMemberNames, setWhoHasOrHasntVoted} from "../../../Store/slices/storageForMembersSlice";
import VotesModal from "./VotesModal/VotesModal";

export const Votes = () => {
    const dispatch = useDispatch();
    const votes = useSelector( state => state.club.votes );
    const memberIds = useSelector( state => state.club.memberIds );
    const memberNames = useSelector( state => state.storageForMembers.members.names);
    const whoHasVotedAndWhoHasnt = useSelector( state => state.storageForMembers.members.whoHasOrHasntVoted);
    let aux = [];

    useEffect(() => {
        if(memberIds.length !== 0) dispatch(getMemberNames(memberIds));
    }, [memberIds])

    useEffect(() => {
        if(memberNames.length !== 0 && memberIds[0]) {
            let i = 0;
            for(const memberName of memberNames) {
                let hasVoted = false;

                if(votes) {
                    for(const voterId in votes) {
                        if(memberIds[i] === voterId) {
                            hasVoted = true;
                            break;
                        }
                    }
                }
                aux[i] = { name: memberNames[i++].name, voted: hasVoted };
            }
            dispatch(setWhoHasOrHasntVoted(aux));
        }
    }, [memberNames, votes])

    return (
        <div className="votes">
            <VotesView clubMembers={whoHasVotedAndWhoHasnt} />
            <VotesModal />
        </div>
    );
}
