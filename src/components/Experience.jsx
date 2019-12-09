import React from "react"

const Experience = props => (
    <div className="Experience">
        <div className="Experience-container">
            {
                props.data.map( (exp, index) => (
                    <div className="Experience-item" key={`Edu-${index}`}>
                    <h3>{exp.jobTitle}</h3>
                    <h4>{exp.company}</h4>
                    <p>{exp.startDate} - {exp.endDate}</p>
                    <p>{exp.jobDescription}</p>
                    </div>
                ))
            }
        </div>
    </div>
)

export default Experience;