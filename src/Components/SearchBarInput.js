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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  margin: {
    margin: theme.spacing(2),
    fontWeight: "bold",
  },
}));

const SearchBarInput = ({ handleSearch, searchTerm }) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        className={classes.margin}
        id="outlined-size-normal"
        label="Search Avatar..."
        onChange={handleSearch}
        value={searchTerm}
        defaultValue="large"
        variant="outlined"
        size="large"
        color="secondary"
        fullWidth
      />
    </form>
  );
};

export default SearchBarInput;
