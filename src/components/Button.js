import React, {useState} from "react";


const Button = ()=>{
    let [clicked, setClicked] = useState(0);
    return (
        <div>
            <p>Button clicked {clicked} times</p>
            <button onClick={setClicked(clicked+1)}>Click me</button>
        </div>
    )
}

export default Button;