import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/movieSlice";


const useHorrorMovies = () => {
//fetch data from tmdb api and update the redux store
  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addHorrorMovies(json.results));
  }

  //using use effect here so that it can call it only once when the component loads and not on every re render also using 
  //[] as dependency array to make sure it runs only once 
  useEffect(() => {
    getHorrorMovies();
  }, [])
}

export default useHorrorMovies;