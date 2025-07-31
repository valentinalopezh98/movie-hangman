import Letter from './Letter'

export default function Chars({letters, validateLetter}) {
  return (
    <div>{
      letters.map(l => (<Letter key={l.value} value={l.value} validateLetter={validateLetter}/>))
      }
    </div>
  )
}
