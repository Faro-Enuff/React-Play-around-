import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  flipCardFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    webkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    borderRadius: "25px 25px 25px 25px",
  },
  image: {
    borderRadius: "25px 25px 25px 25px",
    width: "100%",
    height: "100%",
    boxShadow:
      "0.2px 0.2px 0.2px rgba(0, 0, 0, 0.15), -0.2em 0 0.7em rgba(108, 25, 116)",
  },
});
const FlipCardFront = ({ char }) => {
  const classes = useStyles();

  return (
    <div className={classes.flipCardFront}>
      <img className={classes.image} src={char.image} alt="avatar" />
    </div>
  );
};

export default FlipCardFront;
