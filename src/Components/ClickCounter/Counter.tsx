// import { toggleButtonClasses } from "@mui/material";
import CounterStye from "./Counter.module.css"
import React, {useState} from "react";

function Counter(){

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () =>{
        setCounter(counter ? counter - 1 : counter);
    }

    const handleReset = () => {
        setCounter(0)
    }



    return(
        <>
        <div className={CounterStye.mainContainer}>
                <p className={CounterStye.label}> Increment  </p>
                <p className={CounterStye.label}> {counter}</p>
                <p className={CounterStye.label}> Decrement </p>

        
                <button onClick={handleIncrement} className={CounterStye.button}> + </button>
                <button onClick={handleReset} className={CounterStye.button}>RESET</button>
                <button onClick={handleDecrement} className={CounterStye.button}> - </button>
               
        </div>
        </>
    )

//     const [name, setName] = useState("GEM");
//     const updateName = () =>{
//         setName("gem");
//     }

//     const [age, setAge] = useState(0);
//     const updateAge = () => {
//         setAge(age + 1);
//     }

//     const [isEmployed, setIsEmployed] = useState(false);
//     const toggleEmployedStatus = () =>{
//         setIsEmployed(!isEmployed);
//     }

//  return(
//     <div>
//         <p> Name: {name}</p>
//         <button onClick={updateName}> Set Name</button>

//         <div>
//             <p> increment age {age}</p>
//             <button onClick={updateAge}> Age </button>
//         </div>

//         <div>
//             <p> employee: {isEmployed ? "YES" : "NO"}</p>
//             <button onClick={toggleEmployedStatus}> isEmployed </button>
//         </div>
//     </div>
//  );
}

export default Counter;
