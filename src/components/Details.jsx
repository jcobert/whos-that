import React from "react";
import Collapse from "react-bootstrap/Collapse";

function Details(props) {
    let relationshipStatus = "Single";
    let partnerImgTag = "";

    const [visible, toggleVisible] = React.useState(props.expandState);

    function handleClick() {
        toggleVisible(!visible);
        props.setExpandState(!props.expandState);
    }

    function listItems(items) {
        const output = [];
        for (let i = 0; i < items.length; i++) {
            output.push(<p className="info" key={i}>{items[i]}</p>);
        }
        return (output);
    }

    function calculateAge(dob) {
        let birthday = new Date(dob);
        let ageDifMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function goToPartner() {
        let partner = props.partner.id;
        document.getElementById(props.id).classList.remove("active-card");
        props.linkChange(partner);
        document.getElementById(partner).classList.add("active-card");
    }

    if (props.relationship !== "Single") {
        relationshipStatus = `${props.relationship} to`;
        if (props.relationship === "Dating") {
            relationshipStatus = `${props.relationship}`;
        }
        partnerImgTag = <a className="partner" href={`#${props.partner.id}`} onClick={goToPartner}><img src={props.partner.img} alt="avatar_img" /></a>
    }

    return (
        <div className="details-wrapper">
            <div className="">
                <div className="details-container">
                    <Collapse in={props.expandState}>
                        <div className={props.expandState}>
                            <div className="grid grid-cols-4">
                                <div className="details row">
                                    <div className="details-col col-3">
                                        <p className="title">Age</p>
                                        <p className="info">{props.birthday === "" ? "--" : calculateAge(props.birthday)}</p>
                                    </div>
                                    <div className="locale details-col col-5">
                                        <p className="title">Location</p>
                                        <p className="info">{props.location}</p>
                                    </div>
                                    <div className="details-col col-4">
                                        <p className="title">Nicknames</p>
                                        {listItems(props.nicknames)}
                                    </div>
                                </div>
                                <div className="details row">
                                    <div className="details-col col-6">
                                        <p className="title">Associations</p>
                                        {listItems(props.association)}
                                    </div>
                                    <div className="details-col col-6">
                                        <p className="title">{relationshipStatus}</p>
                                        <p className="info">{props.relationship === "Single" ? "(Last I checked)" : props.partner.name}</p>
                                        {partnerImgTag}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
            <div className="show-more">
                <button className={`btn-show-more ${visible ? "rotate-open" : "rotate-closed"}`}
                    onClick={handleClick}>
                    <i className="show-more-icon fa-duotone fa-circle-plus fa-4x"></i>
                </button>
            </div>
        </div>
    );
}



export default Details;