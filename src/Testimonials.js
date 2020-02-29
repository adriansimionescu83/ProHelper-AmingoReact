import React, {useContext, useState} from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import FeedLayout from './FeedLayout.js';
import Feeds from './Feeds.js';
import AppContext from './AppContext';

const TestimonialsPage = ()=>{
  
    const [state, setState] = useState(
        { feed: [] }
    )

    const [globalState, setGlobalState] = useContext(
        AppContext
    )

    const loadFeed = () => {
        fetch('https://')
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
            <p>
                <button onClick={loadFeed}>Load Testimonials</button>
            </p>
            )
             } else {
                return (
                    <FeedLayout>
                    {
                        state.feed.map(
                            (item)=>
                            <Feeds 
                                title={item.title}
                                description={item.body}
                                buttonLabel="View Post"
                            />
                        )
                    }
                    </FeedLayout>  
            )
        }
}
export default TestimonialsPage;