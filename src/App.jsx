import React, { useState } from 'react'
import './App.css'

function App() {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        passwordConf:"",
        wantNews:false
    })
    
    function handleChange(event) {
        setFormData(prevData => {
        const {name, type, checked, value} = event.target
        return{
                ...prevData,
               [name]: type === "checkbox"? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)

        const { password, passwordConf, wantNews} = formData 
        const requiredFields = ["name", "email", "password", "passwordConf"]
        const  allFieldsFilled = requiredFields
            .every(field => formData[field] !== '') 
        
        if (allFieldsFilled){
            if(password === passwordConf) {
                console.log("Successfully sign up!")
            } else {
                console.log("Password don't match!")
                return
            }
            
            if(wantNews) {
                console.log("Thanks for signing up for our newsletter!")
            }

        } else {
            console.log("Fill all required the filds")
        }
    }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className='form--input--text'
        />
        <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className='form--input--text'
        />
        <input
            name="password"
            type="text"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className='form--input--text'
        />
        <input
            name="passwordConf"
            type="text"
            value={formData.passwordConf}
            onChange={handleChange}
            placeholder="Confirm your password"
            className='form--input--text'
        />
      <div className='checkbox-wrapper'>
        <input
            name="wantNews"
            id="wantNews"
            type="checkbox"
            checked={formData.wantNews}
            onChange={handleChange}
            className='form--input--checkbox'
        />
        <label 
            htmlFor='wantNews'
            className='form--input--label'
        >
            Recive news?
      
      </label>
      </div>
        <button
            className='form--button'
        >
            Submit!
        </button>
      </form>
    </>
  )
}

export default App
