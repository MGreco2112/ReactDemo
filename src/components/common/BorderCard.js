import React from "react";

const BorderCard = (props) => {
const count = 1;

    return (
        <div
            style={
                {
                    border: 'lpx solid #171717',
                    borderRadius: 5,
                    margin: '10px',
                    padding: '10px',
                    width: '80%',
                    maxWidth: 500,
                    backgroundColor: 'blue',
                    boxShadow: '1px 1px 20px rgba(91, 91, 91, 0.5)'
                }
            }
        >
            {props.children}
        </div>
    )
}

export default BorderCard;