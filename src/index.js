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
