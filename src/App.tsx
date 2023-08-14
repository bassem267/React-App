import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
  let items = ["Paris", "Tokyo", "London", "New York", "Napolie"];
  let heading = "List Of Cities";

  const handelSelected = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading={heading} onSelectedItem={handelSelected} />
    </div>
  );
}

export default App;
