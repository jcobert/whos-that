import { useState, useCallback, useEffect } from "react";
import { RefreshIcon } from "@heroicons/react/outline";

function ResetButton() {
  return (
    <div className="w-11/12 md:w-3/12 lg:w-24 mx-auto md:mr-4">
      <button className="w-full border border-gray-300 shadow-sm rounded-md p-2">
        <span className="space-x-1">
          <RefreshIcon className="w-5 inline-block" />
          <p className="inline-block text-sm">Reset</p>
        </span>
      </button>
    </div>
  );
}

export default ResetButton;
