import React, { useEffect, useState } from 'react'
import './Participants.css';
import VARIABLES from '../../config/.env';

function Participants() {
    const [participants, setParticipants] = useState([]);

    // Pull Strapi Data
    useEffect(() => {
        function compare(a, b) {
            // for comparing participants

            return a.LastName < b.LastName; // alphabetic ordering of last name.
        }

        fetch([VARIABLES.fetchBaseUrl, 'list-of-participants'].join('/')) // need to figure out how to sort in query, but for another day </3
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            data.sort(compare);
            setParticipants(data)
        })
        .catch(err => console.log(err));
    }, []);



    return (
        <div className="participants">
            <h1>List of NWC Participants</h1>

            {/**LIST */}
            <div className="participantsList">
                {participants.map(p => <p key={Math.random()}>{p.LastName} {p.FirstName}</p>)}
            </div>
        </div>
    )
}

export default Participants
