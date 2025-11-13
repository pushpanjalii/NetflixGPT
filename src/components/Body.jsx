import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.jsx';

const Body = () => {
  const dispatch = useDispatch();


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
       path: "/browse",
        element: <Browse />,
    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, redirect to browse
       const {uid,email, displayName} = user;
       dispatch(addUser({uid: uid, email: email, name: displayName}));
      } else {
        // User is signed out, redirect to login
        dispatch(removeUser());
        
      }
  });
}, []);

  return (
    <div>
       <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;