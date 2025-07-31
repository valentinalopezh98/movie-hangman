import React from 'react'

export default function Chars({letters}) {
  console.log(letters)
  return (
    <div>{
      letters.map(l => (<button key={l.value}>{l.value}</button>))}</div>
  )
}
