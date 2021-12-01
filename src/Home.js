import React from 'react'
import Navigation from './Navigation';
import Banner from './Banner';
import './css/home.css'
function Home() {
    return (
        <div className="homeCreen">
           <Navigation />
           <Banner />
        </div>
    )
}

export default Home;
