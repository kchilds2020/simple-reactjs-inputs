import React, {useState} from 'react'

import { NumberInput, TextInput } from 'simple-reactjs-inputs'
import 'simple-reactjs-inputs/dist/index.css'

const App = () => {
  const [num,setNum] = useState('')
  return <TextInput value={num} setValue={setNum} label='Number' labelPos='top'/>
}

export default App
