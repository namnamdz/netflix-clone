import React from 'react'
import Navigation from './Navigation';
import Banner from './Banner';
import './css/home.css'
import Row from './Row';
import userrequest from './Request';
function Home() {
    return (
        <div className="homeCreen">
           <Navigation />
           <Banner />
           <Row title="Nexflix Originals" isLargeRow fetchURL={userrequest.fetchNetflixOriginals} />
           <Row title="Top Trending" isLargeRow fetchURL={userrequest.fetchTrending} />
           <Row title="Top Rated" isLargeRow fetchURL={userrequest.fetchTopRate} />
           <Row title="Action Movies" isLargeRow fetchURL={userrequest.fetchActioMovies} />
           <Row title="Comedy Movies" isLargeRow fetchURL={userrequest.fetchComedyMovies} />

        </div>

    )
}

export default Home;
