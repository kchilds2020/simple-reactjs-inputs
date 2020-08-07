import React, {useState} from 'react'

import { NumberInput, TextInput, TelInput } from 'simple-reactjs-inputs'
import 'simple-reactjs-inputs/dist/index.css'

const App = () => {
  const [num,setNum] = useState('')
  return <TelInput value={num} setValue={setNum} label='Phone Number' labelPos='left'/>
}

export default App
