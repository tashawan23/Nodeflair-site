import React from 'react'

export const CardItem = props => {
    return (
        <div className="job-card">
            <span className= "job-logo-wrapper">
            <img className="job-logo"
            alt="Company logo"
            src={props.src}>
            </img>
            </span>
            <span className="job-details">
            <div className="job-company">{props.name}</div>
            <div className="job-description">{props.text}</div>
            </span>
            <div className="job-footer">
                <span className="job-card-time">{props.timestamp}</span>
                <span className="job-card-category">{props.category}</span>
            </div>
            <div className="job-tags">
                <span className="job__tag">{props.tag1}</span>
                <span className="job__tag">{props.tag2}</span>
                <span className="job__tag">{props.tag3}</span>
            </div>
        </div>
    )
}
