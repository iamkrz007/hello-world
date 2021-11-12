import React from "react";
import './Modal.css';
const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>Some text in the Modal..</p>
                <h1 onClick={props.openHandler}>CLOSE</h1>
            </div>
        </div>
    );
};

export default Modal;