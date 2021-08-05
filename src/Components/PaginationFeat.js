import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const PaginationFeat = ({
  changePagePrevious,
  changePageNext,
  currentPage,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.field}>
      <ButtonGroup>
        <Button
          color="secondary"
          variant="outlined"
          className={classes.field}
          onClick={changePagePrevious}
        >
          Previous
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          className={classes.field}
          onClick={changePagePrevious}
        >
          {currentPage}
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          className={classes.field}
          onClick={changePageNext}
        >
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default PaginationFeat;
