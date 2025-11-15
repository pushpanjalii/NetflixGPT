import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";



const usePopularMovies = () => {
//fetch data from tmdb api and update the redux store
  const dispatch = useDispatch();

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
    getPopularMovies();
  }, [])
}

export default usePopularMovies;