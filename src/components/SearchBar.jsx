import { useState } from "react";
import { Dialog, Combobox } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";

function SearchBar(props) {
  //   const [isOpen, setIsOpen] = useState(true);
  const people = props.people;

  return (
    <div className="w-11/12 mx-auto mt-4">
      <Combobox
        onChange={() => {}}
        as="div"
        className="bg-white border border-gray-300 rounded-md shadow-sm py-2 text-left"
      >
        <div className="flex items-center px-4">
          <SearchIcon className="h-5 w-5" aria-hidden="true" />
          <Combobox.Input
            onChange={() => {}}
            className="w-full ml-2 block focus:outline-none"
            placeholder="Search people..."
          />
        </div>
        <Combobox.Options className="mt-2 max-h-28 overflow-y-auto">
          {people.map((person) => (
            <Combobox.Option key={person.id}>
              {({ active }) => (
                <div className={`px-4 py-2 ${active ? 'text-white bg-[#3c76bd]' : 'text-gray-900'}`}>
                  <span className="">{person.name}</span>
                </div>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}

export default SearchBar;
