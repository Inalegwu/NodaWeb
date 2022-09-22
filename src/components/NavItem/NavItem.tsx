import React from "react";
import "./NavItem.css";

interface Data {
  item: {
    id?: number;
    title?: string;
    content?: string;
  };
  onPress(item: Object): void;
}

function NavItem({ item, onPress }: Data) {
  const deleteNote = (id: number) => {
    fetch(`http://localhost:8080/api/notes/${id}`, { method: "DELETE" })
      .then((res) => console.log(res))
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.toString());
      });
  };

  return (
    <div
      key={item.id}
      onClick={() => {
        onPress(item);
      }}
      className="navitem"
    >
      <h4>{item.title}</h4>
      <p>{item.content.slice(0, 40) + "..."}</p>
      <button
        onClick={() => {
          deleteNote(item.id);
        }}
        className="btn btn-delete"
      >
        Delete Note
      </button>
      <button
        className="btn btn-edit ml-1"
        onClick={() => {
          onPress(item);
        }}
      >
        Edit Note
      </button>
    </div>
  );
}

export default NavItem;
