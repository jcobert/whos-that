import React from "react";
import Details from "./Details";
import Modal from 'react-bootstrap/Modal'
import CloseButton from 'react-bootstrap/CloseButton';
import useCollapse from "react-collapsed";

function Card(props) {
    const [show, setShow] = React.useState(false);
    const [partnerLink, setPartnerLink] = React.useState(null);
    const [expanded, setExpanded] = React.useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ expanded });
    // const [activeCard, setActiveCard] = React.useState(null);
    const cardRef = React.useRef(null);

    // const firstRender = React.useRef(true);
    // React.useLayoutEffect(() => {
    //     if (firstRender.current) {
    //         firstRender.current = false;
    //         return;
    //     }
    //     console.log(partnerLink);        
    //     if (hash == props.id) {
    //         console.log(`linked to ${partnerLink} : ${props.partner.id}`);
    //         cardRef.current.handleClick();
    //         // setExpanded(true);
    //     }
    // }, [partnerLink]);

    let url = window.location.hash;
    // let hash = url.slice(url.indexOf('#') + 1);

    function handleAvatarShow() {
        setShow(true);
        document.getElementById("root").classList.add("blur-md");
    }

    function handleAvatarClose() {
        setShow(false);
        document.getElementById("root").classList.remove("blur-md");
    }

    function handleCardEnter(e) {
        let activeCards = Array.from(document.getElementsByClassName("active-card"));
        if (activeCards.length > 0) {
            activeCards.forEach(card => {
                card.classList.remove("active-card");
            });
        }
        document.getElementById(props.id).classList.add("active-card")
        // setActiveCard(props.id);
    }

    function handleCardExit() {
        document.getElementById(props.id).classList.remove("active-card");
        // setActiveCard(null);
    }

    return (
        <>
            <div ref={cardRef} className="text-center mt-4 mb-8 md:mt-12 md:mb-16 focus:outline-none" {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}>
                <div id={props.id} className={`bg-[#C5D4DE] md:w-11/12 md:max-w-2xl mx-auto p-3 md:p-6 rounded-xl border border-[#b3b3b3] shadow-md ${expanded ? "pb-8 md:pb-6 active-card" : "pb-4 md:pb-0"}`} onMouseEnter={handleCardEnter} onMouseLeave={handleCardExit} onFocus={handleCardEnter}>
                    <div className="flex md:inline-block">
                        <div className="relative md:bottom-12 flex-shrink-0">
                            <img className="rounded-full w-24 md:w-48 h-24 md:h-48 object-cover md:mx-auto border-4 border-gray-100 shadow-md cursor-pointer" src={props.img} alt="avatar_img" onClick={handleAvatarShow} />
                        </div>
                        <h2 className="md:mb-8 md:-mt-8 my-auto ml-4 md:ml-0 text-left text-[#2B4E6A] font-medium text-3xl md:text-3xl">{props.name}</h2>
                    </div>
                    <div {...getCollapseProps()}>
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
                <div onMouseEnter={handleCardEnter} onMouseLeave={handleCardExit} onFocus={handleCardEnter} className="relative rounded-2xl bottom-[1.5rem] scale-75 w-fit h-12 mx-auto -mb-10">
                    <button className={`rounded-2xl w-20 h-10 bg-[#C5D4DE] rounded-all ${expanded ? "rotate-180 shadow-none transition-all" : "transition-all"}`}                   >
                        <i className={`expand-button mx-auto text-slate-400 fa-duotone fa-angle-up fa-2x ${expanded ? "transition-all" : "transition-all"}`}></i>
                    </button>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleAvatarClose}
                centered
                dialogClassName="w-10/12 md:w-7/12 max-w-xl m-auto md:mx-auto"
                autoFocus={true}
            >
                <div className="absolute z-50 -right-2 -top-2 bg-slate-300 shadow-sm w-fit rounded-full p-1">
                    <CloseButton
                        onClick={handleAvatarClose}
                    />
                </div>
                <Modal.Body>
                    <img className="max-w-full h-auto object-cover object-center w-full" src={props.img} alt="avatar_img" />
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Title className="text-center text-[#2B4E6A] text-4xl">{props.name}</Modal.Title>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Card;
