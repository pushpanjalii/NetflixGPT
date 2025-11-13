import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigate('/');
    
      console.log("User signed out successfully");
    }).catch((error) => {
      // An error happened.
      navigate('/error');
      console.error("Error signing out: ", error);
    });
  }
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 display-flex justify-between flex-row items-center'>
      <img 
      className='w-44'
      src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="Logo" />
   <div className='flex'>
    <img 
    className='w-10 rounded-md cursor-pointer'
    alt="usericon"
    src="https://wallpapers.com/images/thumbnail/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" />
  <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
   </div>
    </div>

  )
}

export default Header