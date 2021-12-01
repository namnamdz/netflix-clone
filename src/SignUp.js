import React, { useRef } from 'react'
import './css/login.css';
import { auth } from './firebase';
function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser =>{
            console.log(authUser)
        }).catch(error =>{
            alert(error.message)
        })

        
    }
    const signIn = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser =>{
            console.log(authUser)
        }).catch(error =>{
            alert(error.message)
        })
    }
    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="text" placeholder="Email or phone number" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button onClick={signIn}>Sign In</button>
                <h4>New to Nextflix? <span onClick={register}>Sign up now.</span></h4>
            </form>

            

        </div>
    )
}

export default SignUp;
