import React from 'react';
import '../css/App.css';
import people from "../people.json";
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

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {peopleCards}
    </div>
  );
}

export default App;
