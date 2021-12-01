import React, {useEffect} from 'react';
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

    return unsubcribe;
  },[])
  return (
    <>
      {
        !user ? (<Login />) 
        : (<Home />)
      }
      
    </>
  );
}

export default App;
