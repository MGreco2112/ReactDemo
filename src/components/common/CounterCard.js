import React, {useState} from "react";
import Counter from "../counter/Counter";

const CounterCard = (props) => {
    // const count = 2;
    const [count, setCount] = useState(0)

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
            onClick={() => setCount(count + 1)}
        >
            <Counter count={count}/>
        </div>
    )
}

export default CounterCard;