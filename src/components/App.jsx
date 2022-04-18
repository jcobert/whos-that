import '../css/App.css';
import people from "../people.json";

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
    <div>
    </div>
  );
}

export default App;
