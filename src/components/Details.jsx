import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { setActive } from "../features/activeCard";

function Details(props) {
  let relationshipStatus = "Single";
  let partnerImgLink = "";

  const dispatch = useDispatch();

  function listItems(items) {
    const output = [];
    for (let i = 0; i < items.length; i++) {
      output.push(
        <p className="block m-0" key={i}>
          {items[i]}
        </p>
      );
    }
    return output;
  }

  function calculateAge(dob) {
    let [year, month, day] = dob.split("-");
    let birthday = new Date(year, month - 1, day);
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  function goToPartner(e) {
    let partner = props.partner.id;
    document.getElementById(props.id).classList.remove("card-hover");
    props.linkChange(partner);
    document.getElementById(partner).classList.add("card-hover");
  }

  function enterPartner(e) {
    let url = e.currentTarget.href;
    dispatch(setActive({ id: props.partner.id, method: "link" }));
  }

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -300;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  if (props.relationship !== "Single") {
    relationshipStatus = `${props.relationship} to`;
    if (props.relationship === "Dating") {
      relationshipStatus = `${props.relationship}`;
    }
    partnerImgLink = (
      <Link
        className="mt-2"
        to={`#${props.partner.id}`}
        scroll={(el) => scrollWithOffset(el)}
        onClick={goToPartner}
        onBlur={enterPartner}
      >
        <img
          className="rounded-full w-20 h-auto mx-auto object-cover object-center shadow-md border-[3px] border-gray-100 hover:border-slate-400 hover:border-2"
          src={props.partner.img}
          alt="avatar_img"
        />
      </Link>
    );
  }

  return (
    <div>
      <div className={props.expandState}>
        <div className="flex flex-col gap-y-8 px-4">
          <div className="grid grid-cols-5">
            <div className="col-start-1 col-span-1 justify-self-start">
              <p className="font-semibold text-lg">Age</p>
              <p className="info">
                {props.birthday === "" ? "--" : calculateAge(props.birthday)}
              </p>
            </div>
            <div className="col-start-2 col-span-2 justify-self-center">
              <p className="font-semibold text-lg">Location</p>
              <p className="info">{props.location}</p>
            </div>
            <div className="col-start-4 col-span-2 justify-self-end">
              <p className="font-semibold text-lg">Nicknames</p>
              {listItems(props.nicknames)}
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div className="col-start-1 col-span-2 justify-self-start">
              <p className="font-semibold text-lg">Associations</p>
              {listItems(props.association)}
            </div>
            <div className="col-start-3 col-span-2 flex flex-col justify-self-end">
              <p className="font-semibold text-lg">{relationshipStatus}</p>
              <p className="info">
                {props.relationship === "Single"
                  ? "(Last I checked)"
                  : props.partner.name}
              </p>
              {partnerImgLink}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
