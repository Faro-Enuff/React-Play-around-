import FlipCardList from "../Components/FlipCardList";
import useFetch from "../utils/useFetch";
import PaginationFeat from "../Components/PaginationFeat";
import SearchBarInput from "../Components/SearchBarInput";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  homePage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: 15,
    color: "rgb(108, 25, 116)",
    textShadow:
      "20px 20px 40px rgba(0, 0, 0, 0.15), -0.1em 0 0.3em rgba(108, 25, 116)",
  },
  subHeading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 5,
    textShadow:
      "20px 20px 40px rgba(0, 0, 0, 0.15), -0.1em 0 0.3em rgba(108, 25, 116)",
  },
  cardList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Home = () => {
  const classes = useStyles();
  ////////////////////////
  //Fetch Data

  const {
    data: chars,
    isPending,
    error,
    next,
    prev,
    setUrl,
    setAvatar,
    avatar,
  } = useFetch();

  ////////////////////////
  //Pagination Change
  const [currentPage, setCurrentPage] = useState(1);
  const changePageNext = () => {
    if (next !== null) {
      setUrl(next);
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const changePagePrevious = () => {
    if (prev !== null) {
      setUrl(prev);
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };
  ////////////////////////
  //Search Bar

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setAvatar(searchTerm);
    setUrl(`https://rickandmortyapi.com/api/character?name=${avatar}`);
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Paper>
            <Typography className={classes.heading} variant="h2">
              Rick & Morty
            </Typography>
            <Typography className={classes.subHeading} variant="h4">
              Avatar Album
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper>
            <SearchBarInput
              handleSearch={handleSearch}
              searchTerm={searchTerm}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper>
            {error && <div className="error">{error}</div>}
            {isPending && <div className="loader">Loading...</div>}
            {chars && (
              <FlipCardList
                className={classes.cardList}
                chars={chars}
                searchTerm={searchTerm}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper>
            <PaginationFeat
              changePageNext={changePageNext}
              changePagePrevious={changePagePrevious}
              currentPage={currentPage}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
