import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgb(108, 25, 116)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(108, 25, 116)",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  iconButton: {
    padding: 20,
  },
}));

const SearchBarInput = ({ chars, handleSearch }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        className={classes.margin}
        id="searchInput"
        label="Search avatar"
        onChange={handleSearch}
        value={searchTerm}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchBarInput;
