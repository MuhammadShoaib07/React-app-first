import { React, Fragment } from "react";
import ReactDom from "react-dom";

import classes from "../../assets/Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children}</div>
    </div>
  );
};

const protalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        protalElement
      )}
      {ReactDom.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        protalElement
      )}
    </Fragment>
  );
};

export default Modal;
