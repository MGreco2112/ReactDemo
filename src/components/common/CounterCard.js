import React, {useState} from "react";
import Counter from "../counter/Counter";

const CounterCard = (props) => {
    // const count = 2;

    //Object Destructuring of count, setCount Array? Will ask on Monday
    const [count, setCount] = useState(0)

    return (
        <div
            //HTML Style for Div
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
            //HTML OnClick Anon Function for Div
            onClick={() => setCount(count + 1)}
        >
            {/* InnerText Div in the psudo HTML context, imported from Counter file*/}
            <Counter count={count}/>
        </div>
    )
}

export default CounterCard;