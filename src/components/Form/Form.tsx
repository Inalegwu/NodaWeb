import React, { useState } from "react";
import "./Form.css";

function Form({ info }: any) {
  const [title, setTitle] = useState<string>();
  const [id, setId] = useState<string>();
  const [content, setContent] = useState<string>();
  let information = info;
  const addTask = (e) => {
    e.preventDefault();
    console.log("Adding...");
    fetch("http://localhost:8080/api/notes/", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        title: title,
        content: content,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((note) => {
        setTitle("");
        setContent("");
        e.target.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className="form" onSubmit={addTask}>
      <input
        type="number"
        className="input"
        placeholder="Enter an ID"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        className="input"
        type="text"
        placeholder="Enter Task Title"
        name="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        className="input fulltext"
        placeholder="Enter Task Content"
        name="content"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <button className="btn btn-submit" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default Form;
