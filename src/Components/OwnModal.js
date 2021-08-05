import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modalContainer: {
    position: "fixed",
    display: "flex",
    marginTop: 150,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: " rgba(108, 25, 116)",
    borderWidth: 3,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const OwnModal = ({ char }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.modalContainer}>
      <Button
        type="button"
        onClick={handleOpen}
        className="modal-button"
        color="secondary"
        variant="contained"
      >
        More Information
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="h2">
              {char.name} ({char.status})
            </Typography>
            <Typography variant="h4">
              Species: {char.species}, {char.gender}
            </Typography>
            <Typography variant="body1">
              Origin: {char.origin.name}
              <br></br>
              Location: {char.location.name}
            </Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default OwnModal;
