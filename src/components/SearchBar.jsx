import { useState, useCallback, useEffect } from "react";
import { Dialog, Combobox } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

function SearchBar(props) {
  //   const [isOpen, setIsOpen] = useState(true);
  const people = props.people;
  const [query, setQuery] = useState("");
  let navigate = useNavigate();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    handleSearch();
  }, [query]);

  const filteredPeople = query
    ? people.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  function filterPeopleBySearch(key) {
    return props.cards.filter(function (p) {
      return p.props.name.toLowerCase().includes(key);
    });
  }

  const handleSearch = useCallback(() => {
    if (query === "" || filteredPeople.length === 0) {
      props.setSelectionState(props.cards);
    } else {
      props.setSelectionState(filterPeopleBySearch(query.toLowerCase()));
      // props.setFilteredState(true);
    }
  });

  return (
    <div className="w-11/12 md:w-auto lg:w-auto mx-auto md:ml-0 mt-4 md:mr-4">
      <Combobox
        onChange={(person) => {
          setQuery(person.name);
        }}
        as="div"
        className="bg-white border border-gray-300 rounded-md shadow-sm text-left overflow-hidden"
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
          <Combobox.Options className="absolute z-50 mt-1 py-1 bg-white border border-gray-200 shadow-md rounded-md max-h-32 overflow-y-auto overflow-elipsis">
            {filteredPeople.map((person) => (
              <Combobox.Option key={person.id} value={person}>
                {({ active }) => (
                  <div
                    className={`px-4 py-2 space-x-2 font-medium ${
                      active ? "text-white bg-[#3c76bd]" : "text-gray-900"
                    }`}
                  >
                    <span>{person.name}</span>
                    <span>
                      {person.nicknames.map((nickname, i) => (
                        <span
                          className={`font-light text-sm ${
                            active ? "text-white" : "text-gray-400"
                          }`}
                        >
                          {nickname}
                          {`${person.nicknames.length - 1 === i ? "" : ", "}`}
                        </span>
                      ))}
                    </span>
                  </div>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
        {query && filteredPeople.length === 0 && (
          <div className="absolute z-50 mt-1 py-1 bg-white border border-gray-100 shadow-sm rounded-md">
            <p className="text-gray-500 text-sm px-4 py-2">
              Hmm can't find anyone by that name.
            </p>
          </div>
        )}
      </Combobox>
    </div>
  );
}

export default SearchBar;
