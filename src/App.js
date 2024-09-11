import './App.css';
import {Header} from "./components/Header";
import {Banner} from "./components/Banner";
import {MovieList} from "./components/MovieList";
import {useEffect, useState} from "react";
import {MovieSearch} from "./components/MovieSearch";
import {MovieProvider} from "./context/MovieProvider";


function App() {

    const [hotMovies, setHotMovies] = useState([])
    const [topMovies, setTopMovies]  = useState([])
    const [movieSearch, setMovieSearch] = useState([])

    const handleSearch = async (searchVal) =>
    {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            };

            const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&language=vi&page=1`
            const searchMovies = await fetch(url, options);
            const data = await searchMovies.json();
            setMovieSearch(data.results);
        }
        catch(e)
        {
            console.log(e);
        }
    }


    useEffect(() => {
        const fetchMovie = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            };


            const url = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1'
            const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1'
            const [res1, res2] = await Promise.all([
                fetch(url, options),
                fetch(url2, options)
            ])
            const hotMoviesData = await res1.json();
            const topMoviesData = await res2.json();

            setHotMovies(hotMoviesData.results)
            setTopMovies(topMoviesData.results)
        }

        fetchMovie();
    }, []);

    return (
        <MovieProvider>
            <div className="bg-black pb-10">
                <Header onSearch={handleSearch}/>
                <Banner/>
                {movieSearch.length > 0 ? (
                    <MovieSearch title="Kết quả tìm kiếm" data={movieSearch}/>
                ) : (
                    <>
                        <MovieList title="Phim HOT" data={hotMovies}/>
                        <MovieList title="Phim đề cử" data={topMovies}/>
                    </>
                )}
            </div>
        </MovieProvider>
    );
}

export default App;
