import React, {useContext, useState} from 'react';
import AppContext from './AppContext';
import WorkerCard from './WorkerCard';
import WorkerLayout from './WorkerLayout.js';

const Workers = ()=>{
    const [state, setState] = useState(
        { feed: [] }
    )
    const [globalState, setGlobalState] = useContext(
        AppContext
    )
    fetch('http://localhost:4010/worker/all')
        .then(response => response.json())
        .then(json=> {
            setState(   
                {
                    ...state,
                    feed: json.results
                }
            )
        })   
        return (
            <div>
                <WorkerLayout>
                    {         
                    state.feed.map(
                    (item)=>
                    <WorkerCard 
                    photo={item.photo}               
                    firstname={item.firstname}
                    lastname={item.lastname}
                    email={item.email}
                    phonenumber={item.phonenumber}
                    />
                    )
                }
                </WorkerLayout>
                </div>
         )     
}

export default Workers;


