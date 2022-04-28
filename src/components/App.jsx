import React from 'react';
import people from "../people.json";
import Header from "./Header";
import Card from "./Card";

let peopleCards = [];
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
}

var peopleCardSelection = peopleCards;

function App() {
  const [filtered, setFiltered] = React.useState(false);

  function filterPeopleByAssoc(key) {
    return peopleCards.filter(function (p) {
      return p.props.assoc.indexOf(key) >= 0
    })
  }

  function handleFilter(e) {
    peopleCardSelection = filterPeopleByAssoc(e.target.id);
    setFiltered(true);
  }

  return (
    <>
      <Header />
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-16">
          <button
            id="Home"
            className="bg-blue-400 text-white w-24 h-10 rounded-sm mx-auto my-8"
            onClick={handleFilter}>Home
          </button>
          {peopleCardSelection}
        </div>
      </div>
    </>
  );
}

export default App;
