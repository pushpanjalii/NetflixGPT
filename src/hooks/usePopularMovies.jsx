import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";



const usePopularMovies = () => {
//fetch data from tmdb api and update the redux store
  const dispatch = useDispatch();

  const PopularMovies = useSelector(store => store.movies.PolularMovies); //we are using this to avoid multiple api calls as when we navigate back to home we dont want to call the api again if we already have the data in the redux store

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  }

  //using use effect here so that it can call it only once when the component loads and not on every re render also using 
  //[] as dependency array to make sure it runs only once 
  useEffect(() => {
    if(!PopularMovies || PopularMovies.length === 0)
    getPopularMovies();
  }, [])
}

export default usePopularMovies;