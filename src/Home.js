import FlipCard from "./FlipCard";
import useFetch from "./useFetch";
import { useState } from "react";
import PaginationFeat from "./PaginationFeat";

const Home = () => {
  const { data: chars, isPendiqng, error, next, prev, setUrl } = useFetch();

  const changePageNext = () => {
    if (next !== null) {
      setUrl(next);
    }
  };
  const changePagePrevious = () => {
    if (prev !== null) {
      setUrl(prev);
    }
  };

  return (
    <div className="home-page">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loader">Loading...</div>}
      {chars && <FlipCard chars={chars} />}
      <PaginationFeat
        changePageNext={changePageNext}
        changePagePrevious={changePagePrevious}
      />
    </div>
  );
};

export default Home;
