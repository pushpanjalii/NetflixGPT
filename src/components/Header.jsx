import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.jsx";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants.jsx";
import { toggleGptSearchView } from "../utils/gptSlice.jsx";
import { changeLanguage } from "../utils/configSlice.jsx";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // const user = useSelector((store) => store.user.userInfo);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate('/');

        console.log("User signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
        console.error("Error signing out: ", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, redirect to browse
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
        navigate("/browse");
      } else {
        // User is signed out, redirect to login
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Cleanup subscription on unmount using the unsubscribe function
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // toggle to GPT Search page
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log("Selected language: ", event.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className="absolute w-full px-8 py-4 
      bg-gradient-to-b from-black/90 to-transparent 
      z-50
      flex justify-between items-center  
      flex-col md:flex-row               
      gap-4 md:gap-0"
    >
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Logo" />

      <div className="flex p-2">
        {showGptSearch && (
          <select
            className="p-2 m-2 bg-gray-900 text-white rounded-lg"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="py-2 px-4 mx-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Back to Browse" : "GPT Search"}
        </button>
        <img
          className="w-10 rounded-md cursor-pointer"
          alt="usericon"
          src={USER_AVATAR}
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
