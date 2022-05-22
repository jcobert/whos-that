import React from 'react';
import people from "../people.json";
import Header from "./Header";
import Heading from './Heading';
import Card from "./Card";
import Footer from "./Footer"
import FilterListbox from "./FilterListbox";

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

function App() {
  const [filtered, setFiltered] = React.useState(false);
  const [selection, setSelection] = React.useState(peopleCards);

  return (
    <div className='flex-grow'>
      <Header />
      <div className='min-h-screen flex flex-col'>
        <div className="mt-14">
          <div className="max-w-7xl mx-auto mt-12 md:mt-20 md:flex md:items-end">
            <Heading />
            <FilterListbox
              filteredState={filtered}
              setFilteredState={setFiltered}
              selectionState={selection}
              setSelectionState={setSelection}
              cards={peopleCards}
              associations={associationList}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-10">
            {selection}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
