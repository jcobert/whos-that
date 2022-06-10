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
    if (query === "") {
      props.setSelectionState(props.cards);
    } else {
      props.setSelectionState(filterPeopleBySearch(query.toLowerCase()));
        // props.setFilteredState(true);
    }
    // navigate(`/#${person.id}`);
  });

  return (
    <div className="w-11/12 mx-auto mt-4">
      <Combobox        
        onChange={setSelected}
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
          <Combobox.Options className="absolute z-50 mt-1 py-1 bg-white border border-gray-200 shadow-md rounded-md max-h-28 overflow-y-auto">
            {filteredPeople.map((person) => (
              <Combobox.Option key={person.id} value={person}>
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
        {query && filteredPeople.length === 0 && (
          <p className=" text-gray-500 px-4 py-2">
            Hmm can't find anyone by that name.
          </p>
        )}
      </Combobox>
    </div>
  );
}

export default SearchBar;
