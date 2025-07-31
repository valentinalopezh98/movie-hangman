import Letter from './Letter'

export default function Letters({letters, validateLetter}) {
  return (
    <div>{
      letters.map(l => (<Letter key={l.value} value={l.value} validateLetter={validateLetter} clicked={l.clicked}/>))
      }
    </div>
  )
}
