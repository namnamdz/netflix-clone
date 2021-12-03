const API_KEY = "cfe422613b250f702980a3bbf9e90716"

const userrequest = {
    fetchTrending: `trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&language=en-US&with_network=123`,
    fetchTopRate: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActioMovies: `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomnaceMovies:`discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentTaries:`discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
}
export default userrequest;