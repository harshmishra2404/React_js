import React from 'react'
import { Bookmark } from 'lucide-react'

const Card03 = (props) => {
    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src= {props.logo} alt="Google Logo" />
                    <button>Save <Bookmark size={12} /></button>
                </div>
                <div className="center">
                    <h3>{props.company} <span>{props.Posting_date}</span></h3>
                    <h2>{props.job_title}</h2>
                    <div className='tag'>
                        <h4>{props.job_time}</h4>
                        <h4>{props.posting_level}</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.wages}</h3>
                    <p>{props.Location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card03
