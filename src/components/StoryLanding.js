import React from 'react'
import {Link} from 'react-router-dom'

export default function StoryLanding(props) {
    return (
        <div className="landing">
            
            <h1>Whats Your Story? </h1>
            <Link to="storyinput">
                <button>Make a Post</button>           
            </Link>

        </div>
    )
}


