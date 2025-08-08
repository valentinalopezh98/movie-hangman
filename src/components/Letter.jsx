function Letter({value, validateLetter, clicked}) {
  
  return (
    <button disabled={clicked} onClick={()=>{validateLetter(value)}} className="border-white border-1 rounded-xl size-10 hover:bg-neutral-600 disabled:text-neutral-500
  ">{value}</button>
  )
}

export default Letter