import React from "react";
import Modal from 'react-bootstrap/Modal'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Avatar(props) {

    const [show, setShow] = React.useState(props.setShowState);

    <Modal
        show={props.setShowState}
        // onHide={handleClose}
        centered
        dialogClassName="w-10/12 md:w-7/12 m-auto"
        autoFocus={true}
    >
        <Modal.Body>
            <img className="max-w-full h-auto object-cover object-center w-full" src={props.img} alt="avatar_img" />
        </Modal.Body>
        <Modal.Footer>
            <Modal.Title className="text-center text-[#2B4E6A] text-4xl">{props.name}</Modal.Title>
        </Modal.Footer>
    </Modal>
}







export default Avatar;