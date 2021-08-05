import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 19,
  },
}));

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
          size="large"
          className={classes.field}
          onClick={changePagePrevious}
          startIcon={<KeyboardArrowLeftIcon />}
        >
          Previous
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          size="large"
          className={classes.field}
          onClick={changePagePrevious}
        >
          {currentPage}
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          size="large"
          className={classes.field}
          onClick={changePageNext}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default PaginationFeat;
