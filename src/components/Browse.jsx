import Header from './Header';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatingMovies from '../hooks/useTopRatingMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatingMovies();
  useHorrorMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}
export default Browse