/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */
import styles from './styles.module.css'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Field = ({type='text',phText='',labelPos='none', value='', setValue = () => null, label='label', minLength='0', maxLength='1000' }) => {
    const [id, setID] = useState('')
    const [prevLength, setPrevLength] = useState(0)

    useEffect(() => {
        setID(`${Math.floor((Math.random() * 10000) + 1)}`)
    },[])

    const validatePhoneFormat = (e) => {
        e.preventDefault()

        if(e.target.value.length === 4 || e.target.value.length === 8){
            e.target.value.length > prevLength ? setValue(e.target.value.slice(0, e.target.value.length - 1) + "-" + e.target.value.slice(e.target.value.length-1)) : setValue(e.target.value.slice(0, e.target.value.length - 1))
            e.target.value.length > prevLength ? setPrevLength(e.target.value.length + 1) : setPrevLength(e.target.value.length - 1)
        }else{
            setValue(e.target.value)
            setPrevLength(parseInt(e.target.value.length))
        }

        
    }
    
    return (
        type === 'text' ? 
            <Container>
                {labelPos === 'left' ? (
                    <FDRow>
                        <Label htmlFor={id}>{label}</Label>
                        <Input 
                            id={id}
                            name={id}
                            type = 'text'
                            placeholder = {phText}
                            value = {value}
                            onChange = {(e) => setValue(e.target.value)}
                            minLength={minLength}
                            maxLength={maxLength}
                            required
                        />  
                    </FDRow>
                ) : labelPos === 'top' ? (
                    <FDCol>
                        <Label htmlFor={id}>{label}</Label>
                        <Input 
                            id={id}
                            name={id}
                            type = 'text'
                            placeholder = {phText}
                            value = {value}
                            onChange = {(e) => setValue(e.target.value)}
                            minLength={minLength}
                            maxLength={maxLength}
                            required
                        />   
                    </FDCol>
                ) :  
                    <Input 
                        id={id}
                        type = 'text'
                        name={id}
                        placeholder = {phText}
                        value = {value}
                        onChange = {(e) => setValue(e.target.value)}
                        minLength={minLength}
                        maxLength={maxLength}
                        required
                    />}
            </Container> 
        : type === 'number' ?
            <Container>
            {labelPos === 'left' ? (
                <FDRow>
                    <Label htmlFor={id}>{label}</Label>
                    <Input 
                        id={id}
                        name={id}
                        type = 'number'
                        placeholder = {phText}
                        value = {value}
                        onChange = {(e) => setValue(e.target.value)}
                        minLength={minLength}
                        maxLength={maxLength}
                        pattern='\d*'
                        required
                    />  
                </FDRow>
            ) : labelPos === 'top' ? (
                <FDCol>
                    <Label htmlFor={id}>{label}</Label>
                    <Input 
                        id={id}
                        name={id}
                        type = 'number'
                        placeholder = {phText}
                        value = {value}
                        onChange = {(e) => setValue(e.target.value)}
                        minLength={minLength}
                        maxLength={maxLength}
                        pattern='\d*'
                        required
                    />   
                </FDCol>
            ) :  
                <Input 
                    id={id}
                    name={id}
                    type = 'number'
                    placeholder = {phText}
                    value = {value}
                    onChange = {(e) => setValue(e.target.value)}
                    minLength={minLength}
                    maxLength={maxLength}
                    pattern='\d*'
                    required
                />}
            </Container> 
        : type === 'email' ?
            <Container>
            {labelPos === 'left' ? (
                <FDRow>
                    <Label htmlFor={id}>{label}</Label>
                    <Input 
                        id={id}
                        name={id}
                        type = 'email'
                        placeholder = {phText}
                        value = {value}
                        onChange = {(e) => setValue(e.target.value)}
                        minLength={minLength}
                        maxLength={maxLength}
                        required
                    />  
                </FDRow>
            ) : labelPos === 'top' ? (
                <FDCol>
                    <Label htmlFor={id}>{label}</Label>
                    <Input 
                        id={id}
                        name={id}
                        type = 'email'
                        placeholder = {phText}
                        value = {value}
                        onChange = {(e) => setValue(e.target.value)}
                        minLength={minLength}
                        maxLength={maxLength}
                        required
                    />   
                </FDCol>
            ) :  
                <Input 
                    id={id}
                    name={id}
                    type = 'email'
                    placeholder = {phText}
                    value = {value}
                    onChange = {(e) => setValue(e.target.value)}
                    minLength={minLength}
                    maxLength={maxLength}
                    required
                />}
            </Container>
        : type === 'phone' ?
            <Container>
                {labelPos === 'left' ? (
                    <FDRow>
                        <Label htmlFor={id}>{label}</Label>
                        <Input 
                            id={id}
                            type = 'tel'
                            placeholder = {phText}
                            value = {value}
                            onChange = {validatePhoneFormat}
                            minLength={minLength}
                            maxLength='12'
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
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
                            onChange = {validatePhoneFormat}
                            minLength={minLength}
                            maxLength='12'
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                        />   
                    </FDCol>
                ) :  
                    <Input 
                        id={id}
                        type = 'tel'
                        placeholder = {phText}
                        value = {value}
                        onChange = {validatePhoneFormat}
                        minLength={minLength}
                        maxLength='12'
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                    />}
            </Container> 
        : <></>

    )
}




export const Form = styled.form`
    padding: 20px;
    margin: 20px;
    background-color: white;
    border: #aaa 1px solid;
    border-radius: 4px;
`

const Container = styled.div`
    width: 100%;    
    padding: 0px;
    margin: 5px 0px;
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
    padding: 10px 5px;
    margin: 0px;
    border: none;
    background-color: #f4f4f4;
    border-radius: 4px;

    :focus {
        outline: none;
    }

`

const Label = styled.label`
    margin-right: 20px;
    min-width: 150px;
`

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    background-color: rgb(38, 41, 231);
    color: white;
    border-radius: 4px;
    box-shadow: 2px 2px 4px #aaa;
    cursor: pointer;

    margin-top: 10px;
    font-size: 18px;

`

