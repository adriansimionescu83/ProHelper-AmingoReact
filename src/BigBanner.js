import React, { useState } from "react";

const MyBigBanner = ()=>{
    const [state, setState] = useState(
        {saved: false}
    )

    const save = () => {
        setState({ ...state, saved: true })
    }
return (
    <div className="jumbotron">
        <div className="container">
          <h1 className="display-8"></h1>
          <p className="lead">Help around your home, at your fingertips</p>
        </div>
      </div> 
)
}

export default MyBigBanner; 