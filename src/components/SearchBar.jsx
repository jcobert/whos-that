import { useState } from "react";
import { Dialog, Combobox } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";

function SearchBar(props) {
  //   const [isOpen, setIsOpen] = useState(true);
  const people = props.people;
  const [query, setQuery] = useState("");

  const filteredPeople = query
    ? people.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="w-11/12 mx-auto mt-4">
      <Combobox
        onChange={() => {}}
        as="div"
        className="bg-white border border-gray-300 rounded-md shadow-sm text-left divide-y divide-gray-100 overflow-hidden"
      >
        <div className="flex items-center px-3 py-2">
          <SearchIcon className="h-6 w-6" aria-hidden="true" />
          <Combobox.Input
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            className="w-full ml-3 block focus:outline-none"
            placeholder="Search people..."
          />
        </div>
        {filteredPeople.length > 0 && (
          <Combobox.Options className="max-h-28 overflow-y-auto">
            {filteredPeople.map((person) => (
              <Combobox.Option key={person.id}>
                {({ active }) => (
                  <div
                    className={`px-4 py-2 ${
                      active ? "text-white bg-[#3c76bd]" : "text-gray-900"
                    }`}
                  >
                    <span className="">{person.name}</span>
                  </div>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
        {
            query && filteredPeople.length === 0 && (
                <p className=" text-gray-500 px-4 py-2">Hmm can't find anyone by that name.</p>
            )
        }
      </Combobox>
    </div>
  );
}

export default SearchBar;
