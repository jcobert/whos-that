import React from "react";
import Details from "./Details";
import Modal from 'react-bootstrap/Modal'

function Card(props) {
    const [show, setShow] = React.useState(false);
    const [partnerLink, setPartnerLink] = React.useState(null);
    const [expanded, setExpanded] = React.useState(false);

    function handleShow() {
        setShow(true);
        document.getElementById("root").classList.add("blur-bg-modal");
    }

    function handleClose() {
        setShow(false);
        document.getElementById("root").classList.remove("blur-bg-modal");
    }

    function handleCardClick() {
        let activeCards = Array.from(document.getElementsByClassName("active-card"));
        if (activeCards.length > 0) {
            activeCards.forEach(card => {
                card.classList.remove("active-card");
            });
        }
        document.getElementById(props.id).classList.add("active-card")
    }

    function handleCardExit() {
        document.getElementById(props.id).classList.remove("active-card");
    }

    return (
        <>
            <div className="text-center">
                <div id={props.id} className="bg-[#C5D4DE] w-11/12 md:max-w-2xl mx-auto mb-8 md:mb-12 p-3 md:p-6 rounded-xl border-2 border-gray-300 shadow-md">
                    <div className="">
                        <div className="relative -top-8">
                            <img className="rounded-full w-48 mx-auto border-4 border-gray-100" src={props.img} alt="avatar_img"/>
                        </div>
                        <h2 className="mb-2 md:mb-8 -mt-4 text-[#2B4E6A] font-medium text-3xl md:text-3xl">{props.name}</h2>
                    </div>
                    <Details
                        association={props.assoc}
                        relationship={props.rel}
                        partner={props.partner}
                        location={props.loc}
                        id={props.id}
                        nicknames={props.nicknames}
                        birthday={props.dob}
                        linkStatus={partnerLink}
                        linkChange={setPartnerLink}
                        expandState={expanded}
                        setExpandState={setExpanded}
                    />
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                dialogClassName="avatar-modal"
                autoFocus={true}
            >
                <Modal.Body>
                    <img className="img-fluid avatar-lg" src={props.img} alt="avatar_img" />
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Title className="name">{props.name}</Modal.Title>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Card;
