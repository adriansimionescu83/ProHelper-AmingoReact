import React, {useContext, useState} from 'react';
import AppContext from './AppContext';
import ServiceCard from './ServiceCard';
import ServiceLayout from './ServiceLayout';
import ServiceRow from './ServiceRow';

const Services = ()=>{

        const [state, setState] = useState(
            { feed: [] }
        )
        const [globalState, setGlobalState] = useContext(
            AppContext
        )
        fetch('http://localhost:4010/services/all')
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
                    <ServiceRow category="Select the service that you're looking for from the list below">
                        {         
                            state.feed.map(
                            (item)=>
                            <ServiceCard image={item.image} name={item.name} country={item.country} city={item.city} description={item.description}/>                                 
                            )
                        }
                    </ServiceRow>  
                    </div>
             )     
    }
    
export default Services;
    
    
    