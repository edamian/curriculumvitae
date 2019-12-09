import React from "react"

const Certificates = props => (
    <div className="Certificates">
        <div className="Certificates-container">
            {
                props.data.map( (cert, index) => (
                    <div className="Certificates-item" key={`Cert-${index}`}>
                    <h3>{cert.name}</h3>
                    <h5>{cert.institution} - {cert.date}</h5>
                    <p>{cert.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
)

export default Certificates;