
import ClueBtn from "./ClueBtn";
import {useContext} from 'react'
import {CluesContext} from '../context/CluesContext'
function Clues() {

  const {cluesData}= useContext(CluesContext)
  return (
    <div>
      <h2>Pistas</h2>
      {
        cluesData.map((c=>(
          <ClueBtn key={c.value} value={c.value}/>
        )))
      }
    </div>
  );
}

export default Clues;
