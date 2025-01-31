import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <Accordion title={"Acc title 1"}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          repellendus labore aperiam doloribus, enim soluta delectus voluptas
          corrupti fugiat ratione?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          assumenda, reprehenderit illo molestias voluptatum accusantium
          mollitia dolor eaque. Commodi officiis esse consequuntur expedita
          nostrum iusto ullam inventore veritatis itaque tempora.
        </p>
      </Accordion>
    </>
  );
}

export default App;
