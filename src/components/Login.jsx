import React from 'react'
import { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { USER_AVATAR } from '../utils/constants';
import { BG_URL } from '../utils/constants';
// import { useNavigate } from 'react-router-dom';


const Login = () => {

const [isSignInForm, setIsSignInForm] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);
// const navigate = useNavigate();


const email = useRef(null); //to access the input field for email and null because initially it is not pointing to any input field
const password = useRef(null);

const handleButtonClick = () => {
  //validate the form data
  // checkValidData(email, password);

  const message = checkValidData(email.current.value, password.current.value);
  setErrorMessage(message);

  if(message) return; //if there is an error message then return

  if(!isSignInForm) {
    //sign up logic
   createUserWithEmailAndPassword(
    auth, //firebase auth instance
    email.current.value, 
    password.current.value)

   .then((userCredential) => {
    updateProfile(auth.currentUser, {
      displayName: "Netflix User",
      photoURL: {USER_AVATAR}
    }).then(() => {
      // Profile updated!
    }).catch((error) => {
      // An error occurred
      console.error("Error updating profile: ", error);
    });
    
    // Signed in  
    const user = userCredential.user;
    console.log('User Signed Up:', user);
    // navigate('/browse');
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-"+ errorMessage);
    // ..
  });
  }
  
  
  else {
    //sign in logic
   signInWithEmailAndPassword(
    auth, 
    email.current.value, 
    password.current.value)

    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('User Signed In:', user);//it will give the access token
      // navigate('/browse');
      // ...
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+ "-"+ errorMessage);
    });
  }


}

const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm);
};

  return (
    <div>
      <Header />
      <div className='absolute'>
      <img className='h-screen w-screen bg-cover bg-center bg-no-repeat'
      src={BG_URL}
      alt="Netflix Logo" />
      </div>

      <form 
      onSubmit={(e) => e.preventDefault()} //preventing default form submission behavior which means page reload
      className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 opacity-90 text-white rounded-lg bg-opacity-80'>

        <h1 className='text-3xl font-bold py-4'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
          {/*isSignInForm is true then show Sign In else show Sign Up */}
        </h1>

        {!isSignInForm && (
          <input  
          type='text' placeholder='Full Name' 
          className='p-2 my-4 w-full bg-gray-700'/>
        )}

        <input 
        ref={email} //ref is used to access the input field
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