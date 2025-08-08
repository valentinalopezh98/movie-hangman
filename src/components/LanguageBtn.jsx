import { GrLanguage } from "react-icons/gr";
import {useContext} from 'react'
import {WordContext} from '../context/WordContext'
function LanguageBtn() {

  const {language, toggleLanguage} = useContext(WordContext)
  return (
    <button className="bg-neutral-700 p-1.5 inline-flex gap-1 items-center rounded-md hover:bg-neutral-600" onClick={toggleLanguage}><GrLanguage />{(language === "spanish") ? "ES" : "EN"}</button>
  )
}

export default LanguageBtn