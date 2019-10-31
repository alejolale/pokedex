import React from 'react';
import './Modal.css';


/**destructuration pour recuperer le props */
/**children represents the text to show */
/**onClose function from parent to setState -- the same as showmodal ;) */
function Modal({ show, children, onClose }) {


    if (!show) {
        return null;
    }
    return <div className="modal">
        {/**Show the modal content */}
        <div>{children}</div>
        {/**Adds a close button */}
        <div>
            {/**we call the togled showFunction on click close button*/}
            <button onClick=
                {e => onClose && onClose(e)}
            >
                Close
      </button>
        </div>
    </div>
}

export default Modal;