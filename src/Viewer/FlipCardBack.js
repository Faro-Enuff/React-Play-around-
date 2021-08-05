import OwnModal from "../Components/OwnModal";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles({
  flipCardBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    webkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(226, 221, 230)",
    color: "white",
    transform: "rotateY(180deg)",
    borderRadius: "25px 25px 25px 25px",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
const FlipCardBack = ({ char }) => {
  const classes = useStyles();
  return (
    <div className={classes.flipCardBack}>
      <img className="logo" src="./Images/images.png" alt="" />
      <Typography variant="h4">{char.name}</Typography>
      <OwnModal char={char} />
    </div>
  );
};

export default FlipCardBack;
