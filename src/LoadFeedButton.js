import React, {useContext, useState} from 'react';
import AppContext from './AppContext';
import MyFeed from './Feeds.js';
import TestimonialSection from './TestDetails';


const LoadFeedButton = () => {
    const [state, setState] = useState(
        { feed: [] }
    )
    const [globalState, setGlobalState] = useContext(
        AppContext
    )

    const loadFeed = () => {
        // Fetch request goes
        fetch('http://localhost:4010/testimonials/all')
        .then(response => response.json())
        .then(json=> {
            setState(   
                {
                    ...state,
                    feed: json.results
                }
            )
        })        
    }

    if(state.feed.length === 0) {
        return (
            <button onClick={loadFeed}>Load Testimonials</button>
        )
    } else {
        return (<div>
                {         
                state.feed.map(
                (item)=>
                <MyFeed 
                image={item.image}               
                title={item.title}
                description={item.description}
                />
                )
            }
            </div>
     )
    }
}

export default LoadFeedButton;