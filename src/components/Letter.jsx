function Letter({value, validateLetter, clicked}) {
  
  return (
    <button disabled={clicked} onClick={()=>{validateLetter(value)}}>{value}</button>
  )
}

export default Letter