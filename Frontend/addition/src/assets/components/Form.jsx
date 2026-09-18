import { useState } from "react";
import Result from "./Result";

const Form = () => {

    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [sum, setSum] = useState("");
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Form Submitted.....");
        setSum( Number(firstNum) + Number(secondNum));
        setShowResult(true);
        setFirstNum("");
        setSecondNum("");
        
    }
  return (
    <>
        <form onSubmit={submitHandler} className="bg-white w-full max-w-sm md:max-w-md flex flex-col items-center p-5 rounded-3xl border border-gray-300 shadow-2xl shadow-black/60 gap-1" >
            <h1 className="text-3xl font-bold tracking-wider uppercase text-black/40">addition</h1>
            <div className="h-px w-full bg-black/70 rounded-full mt-2 mb-5"/>
            
            <input onChange={(e)=>{
                setFirstNum(e.target.value)
                
            }}
            value={firstNum}
            className=" w-[90%] bg-gray-100 shadow-2xl shadow-black/70  px-4 py-2 outline-1 outline-gray-400 focus:outline-blue-600 border-gray-400 rounded-2xl mb-3 placeholder:text-black/60 placeholder:capitalize font-semibold tracking-wide" type="text" placeholder="enter first number" />
            <input
            onChange={(e)=>{
                setSecondNum(e.target.value)
            }}
            value={secondNum}
            className=" w-[90%] bg-gray-100 shadow-2xl shadow-black/70  px-4 py-2 outline-1 outline-gray-400 focus:outline-blue-600 border-gray-400 rounded-2xl mb-3 placeholder:text-black/60 placeholder:capitalize font-semibold tracking-wide" type="text" placeholder="enter second number" />
            
            <button className="bg-black px-4 py-2 text-white uppercase tracking-widest rounded-full font-semibold mt-3 cursor-pointer hover:scale-98 transition-all duration-150 active:scale-102 shadow-xl shadow-black/60">calculate</button>
        </form>

        {showResult &&(<Result sum={sum} setShowResult={setShowResult} />)}
    </>
  )
}

export default Form
