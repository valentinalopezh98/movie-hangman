function Letter({value, validateLetter}) {

  return (
    <button onClick={()=>{validateLetter(value)}}>{value}</button>
  )
}

export default Letter