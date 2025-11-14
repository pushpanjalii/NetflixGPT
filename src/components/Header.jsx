import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.jsx';
import { LOGO, USER_AVATAR } from '../utils/constants.jsx';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((store) => store.user.userInfo);
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      // navigate('/');
    
      console.log("User signed out successfully");
    }).catch((error) => {
      // An error happened.
      navigate('/error');
      console.error("Error signing out: ", error);
    });
  };

   useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, redirect to browse
       const {uid,email, displayName} = user;
       dispatch(addUser({uid: uid, email: email, name: displayName}));
       navigate('/browse');
      } else {
        // User is signed out, redirect to login
        dispatch(removeUser());
        navigate('/');
        
      }
  });


  // Cleanup subscription on unmount using the unsubscribe function
  return () => unsubscribe();
}, []);

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 display-flex flex-row flex justify-between items-center top-0 '>
      <img 
      className='w-44'
      src={LOGO}
      alt="Logo" />
   <div className='flex'>
    <img 
    className='w-10 rounded-md cursor-pointer'
    alt="usericon"
    src={USER_AVATAR}/>
  <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
   </div>
    </div>

  )
}

export default Header