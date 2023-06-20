import React from "react";

const Concepts = (props) => {
    return (
        <ul id="concepts">
            {
                props.concepts.map((concept,index) => {
                    return (
                        <li key={index} className="concept">
                            <img src={concept.image} alt={concept.title} />
                            <h2>{concept.title}</h2>
                            <p>{concept.description}</p>
                        </li>
                    )
                })
            }
      </ul>
    )
}

export default Concepts;