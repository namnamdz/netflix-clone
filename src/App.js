import React, {useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Home from './Home';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(user =>{
      if(user){
        //login
        dispatch(login({
          uid: user.uid,
          email: user.email

        }))

      }
      else{
        //login
        dispatch(logout)
      }
    })
    //console.log(user)

    return unsubcribe;
  },[])
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={!user ? (<Login />) : (<Home />)}/>
        <Route path="/logOut" element={<Login />}/>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
