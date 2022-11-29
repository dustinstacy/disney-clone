import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db, { getMovies } from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];

    getMovies(db).then((doc) => {
      for (let i = 0; i < doc.length; i++) {
        let movie = doc[i];
        switch (movie.type) {
          case "recommend":
            recommends = [...recommends, { id: i, ...movie }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: i, ...movie }];
            break;

          case "original":
            originals = [...originals, { id: i, ...movie }];
            break;

          case "trending":
            trendings = [...trendings, { id: i, ...movie }];
            break;
          default:
            console.log(`No movies match type ${movie.type}`);
        }
      }

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings,
        })
      );
    });
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh -250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
