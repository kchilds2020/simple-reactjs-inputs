/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */
import styles from './styles.module.css'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


export const TextInput = ({phText='',labelPos='none', value='', setValue = () => null, label='label', minLength='0', maxLength='1000' }) => {
    const [id, setID] = useState('')

    useEffect(() => {
        setID(`${Math.floor((Math.random() * 10000) + 1)}`)
    },[])
    
    return (
        <Container>
            {labelPos === 'left' ? (
                <FDRow>
                    <Label htmlFor={id}>{label}</Label>
                    <Input 
                        id={id}
                        type = 'text'
                        placeholder = {phText}
                        value = {value}
                        onChange = {(e) => setValue(e.target.value)}
                        minLength={minLength}
                        maxLength={maxLength}
                    />  
                </FDRow>
            ) : labelPos === 'top' ? (
                <FDCol>
                    <Label htmlFor={id}>{label}</Label>
                    <Input 
                        id={id}
                        type = 'text'
                        placeholder = {phText}
                        value = {value}
                        onChange = {(e) => setValue(e.target.value)}
                        minLength={minLength}
                        maxLength={maxLength}
                    />   
                </FDCol>
            ) :  
                <Input 
                    id={id}
                    type = 'text'
                    placeholder = {phText}
                    value = {value}
                    onChange = {(e) => setValue(e.target.value)}
                    minLength={minLength}
                    maxLength={maxLength}
                />}
        </Container>        
    )
}


export const TelInput = ({phText='',labelPos='none', value='', setValue = () => null, label='label', minLength='0', maxLength='1000' }) => {
    const [id, setID] = useState('')
    const [prevLength, setPrevLength] = useState(0)

    useEffect(() => {
        setID(`${Math.floor((Math.random() * 10000) + 1)}`)
    },[])

    const validateFormat = (e) => {
        e.preventDefault()

        console.log(e.target.value.length, prevLength)
        console.log(e.target.value)

        if(e.target.value.length === 4 || e.target.value.length === 8){
            e.target.value.length > prevLength ? setValue(e.target.value.slice(0, e.target.value.length - 1) + "-" + e.target.value.slice(e.target.value.length-1)) : setValue(e.target.value.slice(0, e.target.value.length - 1))
            e.target.value.length > prevLength ? setPrevLength(e.target.value.length + 1) : setPrevLength(e.target.value.length - 1)
        }else{
            setValue(e.target.value)
            setPrevLength(parseInt(e.target.value.length))
        }

        
    }
    
    return (
        <Container>
            {labelPos === 'left' ? (
                <FDRow>
                    <Label htmlFor={id}>{label}</Label>
                    <Input 
                        id={id}
                        type = 'tel'
                        placeholder = {phText}
                        value = {value}
                        onChange = {validateFormat}
                        minLength={minLength}
                        maxLength='12'
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />  
                </FDRow>
            ) : labelPos === 'top' ? (
                <FDCol>
                    <Label htmlFor={id}>{label}</Label>
                    <Input 
                        id={id}
                        type = 'tel'
                        placeholder = {phText}
                        value = {value}
                        onChange = {validateFormat}
                        minLength={minLength}
                        maxLength='12'
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />   
                </FDCol>
            ) :  
                <Input 
                    id={id}
                    type = 'tel'
                    placeholder = {phText}
                    value = {value}
                    onChange = {validateFormat}
                    minLength={minLength}
                    maxLength='12'
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />}
        </Container>        
    )
}


//number input

export const NumberInput = ({phText='',labelPos='none', value='', setValue = () => null, label='label', minLength='0', maxLength='1000' }) => {
  const [id, setID] = useState('')

  useEffect(() => {
      setID(`${Math.floor((Math.random() * 10000) + 1)}`)
  },[])
  
  return (
      <Container>
          {labelPos === 'left' ? (
              <FDRow>
                  <Label htmlFor={id}>{label}</Label>
                  <Input 
                      id={id}
                      type = 'number'
                      placeholder = {phText}
                      value = {value}
                      onChange = {(e) => setValue(e.target.value)}
                      minLength={minLength}
                      maxLength={maxLength}
                      pattern='\d*'
                  />  
              </FDRow>
          ) : labelPos === 'top' ? (
              <FDCol>
                  <Label htmlFor={id}>{label}</Label>
                  <Input 
                      id={id}
                      type = 'number'
                      placeholder = {phText}
                      value = {value}
                      onChange = {(e) => setValue(e.target.value)}
                      minLength={minLength}
                      maxLength={maxLength}
                      pattern='\d*'
                  />   
              </FDCol>
          ) :  
              <Input 
                  id={id}
                  type = 'number'
                  placeholder = {phText}
                  value = {value}
                  onChange = {(e) => setValue(e.target.value)}
                  minLength={minLength}
                  maxLength={maxLength}
                  pattern='\d*'
              />}
      </Container>        
  )
}



const Container = styled.div`
    width: 95%;    
    padding: 0px;
    margin: 5px auto;
`

const FDRow = styled.div`
    display: flex;
    align-items: center;
`

const FDCol = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    font-size: 18px;
    width: 100%;
    padding: 5px;
    margin: 0px;
    border: #ddd 1px solid;
    background-color: white;

    :focus {
        outline: none;
    }

`

const Label = styled.label`
    font-size: 18px;
    margin-right: 5px;
`
