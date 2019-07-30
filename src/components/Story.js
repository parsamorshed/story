import React from 'react'

export default function Story(props) {
    return (
        <> 
    
        <div className="story-div">

            <div className="end">
                <button onClick={props.del}>X</button>
            </div>
            <h1>{props.mytitle}</h1>
            <img src={props.myimg} alt="oops"/>
            <h2>{props.mystory}</h2>
            <div className="end">
            <h3>- {props.myauthor}</h3>
            </div>

        </div>
        </>
    )
}
