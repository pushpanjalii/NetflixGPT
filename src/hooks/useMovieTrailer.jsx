import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";


const useMovieTrailer = (movieId) => {
    // Custom hook logic here
        const dispatch = useDispatch();

  //fetch trailer video for now playing movie from tmdb api and set it as background video && update the redux store

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+
        movieId
      +"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

}

export default useMovieTrailer;