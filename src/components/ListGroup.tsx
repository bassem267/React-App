import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Paris", "Tokyo", "London", "New York"];

  const [selectedItem, setSelectedItem] = useState(-1);

  const handelClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>City List</h1>
      <ul className="list-group">
        {items.length === 0 && (
          <li className="list-group-item">No Item Found</li>
        )}
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item active"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
