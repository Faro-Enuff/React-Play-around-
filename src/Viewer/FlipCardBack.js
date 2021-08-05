import OwnModal from "../Components/OwnModal";
import { makeStyles } from "@material-ui/core/styles";
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
    backgroundColor: "rgb(108, 25, 116)",
    color: "white",
    transform: "rotateY(180deg)",
    borderRadius: "25px 25px 25px 25px",
  },
});
const FlipCardBack = ({ char }) => {
  const classes = useStyles();
  return (
    <div className={classes.flipCardBack}>
      <h1>{char.name}</h1>
      <OwnModal char={char} />
    </div>
  );
};

export default FlipCardBack;
