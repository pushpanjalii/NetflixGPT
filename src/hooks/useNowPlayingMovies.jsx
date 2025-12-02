import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useNowPlayingMovies = () => {
//fetch data from tmdb api and update the redux store
  const dispatch = useDispatch();

  const NowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies); 

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  }

  //using use effect here so that it can call it only once when the component loads and not on every re render also using 
  //[] as dependency array to make sure it runs only once 
  useEffect(() => {
    if(!NowPlayingMovies || NowPlayingMovies.length === 0)
    getNowPlayingMovies();
  }, [])
}

export default useNowPlayingMovies;