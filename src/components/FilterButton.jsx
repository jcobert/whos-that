import React from "react";

function FilterButton(props) {

    function filterPeopleByAssoc(key) {
        return props.cards.filter(function (p) {
            return p.props.assoc.indexOf(key) >= 0
        })
    }

    function handleFilter(e) {
        props.setSelectionState(filterPeopleByAssoc(e.target.id));
        props.setFilteredState(true);
    }

    return (
        <button
            id={props.id}
            className="bg-blue-400 text-white w-24 h-10 rounded-sm mx-auto my-8"
            onClick={handleFilter}
        >{props.id}
        </button>
    );
}



export default FilterButton;