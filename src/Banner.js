
import React from 'react'
import './css/banner.css';
// import userrequest from './Request'
function Banner() {
    // const [movie, setMovie] = useState([]);

    // useEffect(() =>{
    //     async function fecthData(){
    //         const request = await axios.get(userrequest.fetchNetflixOriginals);

    //         //console.log(request.data.results)
    //         setMovie(request.data.results);
            
    //     }
    //     fecthData();
    // },[])
    return (
        <div className="banner">
            <div className="banner__content">
                <h1 className="banner__title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                <button>Play</button>
                <button>My List</button>
                <div className="banner_decs">
                    <p>
                        Set in the presents, the seri offers a bold. Subversive on Archie, Betty, Veronica and thier friends, exploring
                        the surreality and small-town li

                    </p>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Banner
