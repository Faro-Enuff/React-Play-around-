import FlipCard from "../Components/FlipCard";
import useFetch from "../utils/useFetch";
import PaginationFeat from "../Components/PaginationFeat";
import SearchBarInput from "../Components/SearchBarInput";
import { useState } from "react";

const Home = () => {
  ////////////////////////
  //Fetch Data

  const { data: chars, isPending, error, next, prev, setUrl } = useFetch();

  ////////////////////////
  //Pagination Change

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
  ////////////////////////
  //Search Bar

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="home-page">
      <SearchBarInput handleSearch={handleSearch} searchTerm={searchTerm} />
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loader">Loading...</div>}
      {chars && <FlipCard chars={chars} searchTerm={searchTerm} />}
      <PaginationFeat
        changePageNext={changePageNext}
        changePagePrevious={changePagePrevious}
      />
    </div>
  );
};

export default Home;
