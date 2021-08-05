import FlipCardList from "../Components/FlipCardList";
import useFetch from "../utils/useFetch";
import PaginationFeat from "../Components/PaginationFeat";
import SearchBarInput from "../Components/SearchBarInput";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  cardList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Home = () => {
  const classes = makeStyles();
  ////////////////////////
  //Fetch Data

  const { data: chars, isPending, error, next, prev, setUrl } = useFetch();

  ////////////////////////
  //Pagination Change
  const [currentPage, setCurrentPage] = useState(1);
  const changePageNext = () => {
    if (next !== null) {
      setUrl(next);
      setCurrentPage(currentPage + 1);
    }
  };

  const changePagePrevious = () => {
    if (prev !== null) {
      setUrl(prev);
      setCurrentPage(currentPage - 1);
    }
  };
  ////////////////////////
  //Search Bar

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="home-page">
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Paper>
            <Typography variant="h2">Rick & Morty</Typography>
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
    </div>
  );
};

export default Home;
