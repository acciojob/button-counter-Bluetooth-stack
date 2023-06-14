import React, {useState} from "react";


const Button = ()=>{
    let [clicked, setClicked] = useState(0);

    function renderCount(){
        setClicked(clicked+1);
    }
    return (
        <div>
            <p>Button clicked {clicked} times</p>
            <button onClick={renderCount}>Click me</button>
        </div>
    )
}

export default Button;