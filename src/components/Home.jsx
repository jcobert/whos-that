import React from "react";
import people from "../people.json";
import Heading from "./Heading";
import Card from "./Card";
import FilterListbox from "./FilterListbox";
import SearchBar from "./SearchBar";
import { Outlet } from "react-router-dom";
import ResetButton from "./ResetButton";

function Home(props) {
  const [filtered, setFiltered] = React.useState(false);
  const [selection, setSelection] = React.useState("All");
  const [found, setFound] = React.useState("");

  let peopleCards = [];
  let associations = [];
  for (let i = 0; i < people.length; i++) {
    let p = i;
    if (people[i].hasOwnProperty("partner")) {
      p = people[i].partner - 1;
    }
    peopleCards.push(
      <Card
        key={people[i].id}
        id={people[i].id}
        name={people[i].name}
        img={people[i].img}
        loc={people[i].loc}
        assoc={people[i].assoc}
        rel={people[i].rel}
        partner={people[p]}
        nicknames={people[i].nicknames}
        dob={people[i].dob}
      />
    );
    associations.push(people[i].assoc);
  }

  let uniqueAssoc = [...new Set(associations.flat())].sort();
  let associationList = uniqueAssoc;
  associationList.push("All");
  associationList.sort();

  return (
    <div className="mt-14">
      <div className="max-w-7xl mx-auto mt-12 md:mt-20 md:flex md:items-end">
        <div className="md:grid md:grid-cols-4 lg:grid-cols-3 space-x-2">
          <div className="md:col-start-1 md:col-span-2 lg:col-span-1">
            <Heading />
          </div>
          <div className="md:flex md:flex-col lg:flex-row items-center space-y-4 md:col-start-3 md:col-span-2 lg:col-start-2">
            <div className="self-end md:w-full lg:w-auto">
              <FilterListbox
                filteredState={filtered}
                setFilteredState={setFiltered}
                selectionState={selection}
                setSelectionState={setSelection}
                cards={peopleCards}
                associations={associationList}
              />
            </div>
            <div className="flex-grow self-end md:w-full">
              <SearchBar
                people={people}
                selectionState={selection}
                setSelectionState={setSelection}
                foundState={found}
                setFoundState={setFound}
                cards={peopleCards}
              />
            </div>
            <div className="self-end w-full lg:w-auto">
              <ResetButton />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-10">
        {selection}
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
