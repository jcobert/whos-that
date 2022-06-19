import { useState, useCallback, useEffect } from "react";
import { RefreshIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { setFilteredState } from "../features/currentAssortment";

function ResetButton(props) {
  const dispatch = useDispatch();

  function handleClick() {
    props.setSelectionState(props.cards);
    dispatch(setFilteredState({ filter: false, search: false }));
  }

  return (
    <div className="w-11/12 md:w-3/12 lg:w-24 mx-auto md:mr-4">
      <button
        onClick={handleClick}
        className="w-full bg-zinc-100 border border-gray-300 shadow-sm rounded-md p-2 hover:bg-slate-100 active:bg-slate-200"
      >
        <span className="space-x-1">
          <RefreshIcon className="w-5 inline-block" />
          <p className="inline-block text-sm">Reset</p>
        </span>
      </button>
    </div>
  );
}

export default ResetButton;
