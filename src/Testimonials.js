import React, {useContext, useState} from 'react';
import AppContext from './AppContext';
import TestimonialSection from './TestDetails';
import LoadFeedButton from './LoadFeedButton';

const Testimonials = ()=>{
  
    const [state, setState] = useState(
        { feed: [] }
    )

    const [globalState, setGlobalState] = useContext(
        AppContext
    )

  return (           
        <TestimonialSection>
        <LoadFeedButton/>
        </TestimonialSection>   
        );
}

export default Testimonials;

