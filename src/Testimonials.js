import React, {useContext, useState} from 'react';
import AppContext from './AppContext';
import TestimonialSection from './TestDetails';
import MyFeed from './Feeds';

const Testimonials = ()=>{
  
    const [state, setState] = useState(
        { feed: [] }
    )

    const [globalState, setGlobalState] = useContext(
        AppContext
    )

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
  return (           
        <TestimonialSection>
            <div>
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
        </TestimonialSection>   
        )
}

export default Testimonials;

