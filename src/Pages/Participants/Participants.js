import React, { useEffect, useState } from 'react'
import './Participants.css';
import VARIABLES from '../../config/.env';

function Participants() {
    const [participants, setParticipants] = useState([]);

    // Pull Strapi Data
    useEffect(() => {
        fetch([VARIABLES.fetchBaseUrl, 'list-of-participants?_sort=name:ASC'].join('/')) // need to figure out how to sort in query, but for another day </3
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setParticipants(data)
        })
        .catch(err => console.log(err));
    }, []);

    function filterState(state) {

        console.log([VARIABLES.fetchBaseUrl, `list-of-participants?States_contains=${state}`].join('/'));
        fetch([VARIABLES.fetchBaseUrl, `list-of-participants?States_contains=${state}`].join('/')) // need to figure out how to sort in query, but for another day </3
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setParticipants(Array.isArray(data) ? data : [])
        })
        .catch(err => console.log(err));
    };

    function stateOption(state) {
        return (
            <option>{state}</option>
        )
    };

    const geostates = ["", "Texas", "Louisiana", "Arkansas"];

    return (
        <div className="participants">
            <h1>List of NWC Participants</h1>

            {/**FILTER */}
            <div className="participantsFilter">
                <p>Filter by State: </p>
                <select onChange={e => filterState(e.target.value)}>
                    {geostates.map(g => <option>{g}</option>)}
                </select>
            </div>

            {/**LIST */}
            <div className="participantsList">
                {
                participants.length === 0
                ? "No Participants Found."
                : participants.map(p => <p key={Math.random()}>{p.LastName} {p.FirstName}</p>)
                }
            </div>
        </div>
    )
}

export default Participants
