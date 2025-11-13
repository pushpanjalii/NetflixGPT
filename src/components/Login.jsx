import React from 'react'
import { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';


const Login = () => {

const [isSignInForm, setIsSignInForm] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);


const name = useRef(null);
const email = useRef(null);
const password = useRef(null);

const handleButtonClick = () => {
  //validate the form data
  // checkValidData(email, password);

  const message = checkValidData(email.current.value, password.current.value, isSignInForm ? undefined : name.current.value);
  setErrorMessage(message);
}

const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm);
};

  return (
    <div>
      <Header />
      <div className='absolute'>
      <img className='h-screen w-screen bg-cover bg-center bg-no-repeat'
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw" 
      alt="Netflix Logo" />
      </div>

      <form 
      onSubmit={(e) => e.preventDefault()} 
      className=' w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 opacity-90 text-white rounded-lg bg-opacity-80'>

        <h1 className='text-3xl font-bold py-4'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        {!isSignInForm && (
          <input 
          ref={name} 
          type='text' placeholder='Full Name' 
          className='p-2 my-4 w-full bg-gray-700'/>
        )}

        <input 
        ref={email} 
        type='text' placeholder='Email Address' 
        className='p-2 my-4 w-full bg-gray-700'/>

        <input  
        ref={password} type= 'password' placeholder='Password' 
        className='p-2 my-4 w-full bg-gray-700'/>

        <p 
        className='text-red-500 font-bold'>
          {errorMessage}
          </p>

        <button 
        className='bg-red-600 p-4 my-6 w-full '
         onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'} 
         </button>

        <p 
        className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already have an account? Sign In'}
        </p>
      </form>
    </div>
  )
}

export default Login