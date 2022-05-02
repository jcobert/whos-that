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
        <>
            <button
                id={props.id}
                className="bg-[#3c76bd] text-white self-center w-5/12 h-12 md:w-32 md:h-12 px-2 rounded-sm"
                onClick={handleFilter}
            >{props.id}
            </button>
        </>
    );
}



export default FilterButton;