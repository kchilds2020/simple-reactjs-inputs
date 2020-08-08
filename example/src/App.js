import React, {useState} from 'react'

import { Field, Form, Button } from 'simple-reactjs-inputs'
import 'simple-reactjs-inputs/dist/index.css'

const App = () => {
  const [num,setNum] = useState('')
  const [text,setText] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(num, text, email, phone)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Field type='text' value={text} setValue={setText} label='Text' labelPos='left'/>
      <Field type='number' value={num} setValue={setNum} label='Number' labelPos='left'/>
      <Field type='email' value={email} setValue={setEmail} label='Email Address' labelPos='left'/>
      <Field type='phone' value={phone} setValue={setPhone} label='Phone Number' labelPos='left'/>
      <Button>Submit</Button>
    </Form>
  )
}

export default App
