import React ,{ useState } from 'react'
import './css/login.css';
import SignUp from './SignUp';
function Login() {
    const [signIn, setsignIn] = useState(false);
    const showSignUp = (e) =>{
        e.preventDefault();
        setsignIn(true);
    }
    return (
        
        <div className="login">
            <div className="login__header">
                <img
                    className="login__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                    alt="img"
                />
                <button className="login__button" onClick={showSignUp}>
                    Sign In
                </button>
            </div>
            <div className="login__body">
                {
                    signIn ? (<SignUp />) : (
                    <>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h3>Watch anywhere. Cancel anytime.</h3>
                        <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                        <form className="login__form">
                            <input type="text" placeholder="Email address" />
                            <button onClick={showSignUp}>Get Started</button>
                        </form> 
                    </>
                    )
                }
            </div>
            <div className="login__gradient">

            </div>
            
        </div>
        
        
    )
}

export default Login
