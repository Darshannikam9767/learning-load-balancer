
const Result = ({sum,setShowResult}) => {

    setTimeout(()=>{
        setShowResult(false);
    },10000)
  return (
    <div className=" flex items-center justify-center absolute top-5 border-2 border-green-500 rounded-3xl py-5 bg-green-200  w-full max-w-md md:max-w-lg px-5  shadow-xl shadow-black/40">
      <h5 className="text-2xl font-bold text-green-600 tracking-wider">{sum}</h5>
    </div>
  )
}
export default Result
